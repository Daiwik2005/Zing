require("dotenv").config()
console.log("TOKEN:", process.env.GITHUB_API);
const exp=require("express")
const app=exp()

// require the agent class; githubagent.js exports the class itself
const GithubAgent = require("./agents/githubagent");
app.get("/repos/:username", async (req, res) => {
    // grab the username from the URL parameter
    const username = req.params.username;
    const agent = new GithubAgent(username);
    try {
        const repos = await agent.getRepositories();
        res.json(repos);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch repositories" });
    }
})

// start the server on port 3000 (or use env PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
