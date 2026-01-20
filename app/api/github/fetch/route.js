// src/app/api/github/fetch/route.js

function parseGitHubUrl(url) {
  if (!url || typeof url !== "string") {
    throw new Error("Invalid repo URL")
  }

  const clean = url
    .replace("https://github.com/", "")
    .replace("http://github.com/", "")
    .replace("github.com/", "")
    .replace(/\/$/, "")

  const parts = clean.split("/")
  if (parts.length < 2) {
    throw new Error("Invalid repo URL")
  }

  return {
    owner: parts[0],
    repo: parts[1],
  }
}

export async function POST(req) {
  try {
    const { repoUrl } = await req.json()

    if (!repoUrl) {
      return Response.json(
        { error: "repoUrl is required" },
        { status: 400 }
      )
    }

    const { owner, repo } = parseGitHubUrl(repoUrl)

    const headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    }

    // 1️⃣ Fetch repo metadata
    const repoRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers }
    )

    if (!repoRes.ok) {
      return Response.json(
        { error: "Repository not found" },
        { status: 404 }
      )
    }

    const repoData = await repoRes.json()

    // 2️⃣ Fetch languages
    const langRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/languages`,
      { headers }
    )
    const languagesData = await langRes.json()

    // 3️⃣ Fetch top-level files
    const contentRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents`,
      { headers }
    )
    const contents = await contentRes.json()

    const files = Array.isArray(contents)
      ? contents.map(item => ({
          name: item.name,
          type: item.type,
        }))
      : []

    // 4️⃣ Fetch README (optional)
    let readme = null
    try {
      const readmeRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`,
        {
          headers: {
            ...headers,
            Accept: "application/vnd.github.v3.raw",
          },
        }
      )

      if (readmeRes.ok) {
        readme = await readmeRes.text()
      }
    } catch {
      readme = null
    }

    // ✅ Final response (agent-ready)
    return Response.json({
      success: true,
      repo: {
        name: repoData.name,
        description: repoData.description,
        stars: repoData.stargazers_count,
        primary_language: repoData.language,
        languages: Object.keys(languagesData),
      },
      files,
      readme,
    })
  } catch (err) {
    return Response.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}
