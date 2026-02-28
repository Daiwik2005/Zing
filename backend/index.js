require("dotenv").config()
console.log("TOKEN:", process.env.GITHUB_API);
const exp=require("express")
const app=exp()
const {Octokit} = require("octokit")

// require the agent class; githubagent.js exports the class itself
app.get("/repos/:username", async (req, res) => {
    // grab the username from the URL parameter
    const octo = new Octokit({
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
})

// start the server on port 3000 (or use env PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
