import {octokit} from "octokit"

const octo = new octokit({
    auth: process.env.GITHUB_API
})

await octo.request("GET /users/{username}/repos", {
    username: "daiwik2005"
}).then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.error("Error fetching repositories:", error);
}
)

