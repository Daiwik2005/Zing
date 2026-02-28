const {Octokit} = require("octokit")
require("dotenv").config()
//console.log("TOKEN:", process.env.GITHUB_API);
const octo = new Octokit({
    auth: process.env.GITHUB_API
})

async function handler(req, res) {
await octo.request("GET /users/{username}/repos", {
    username: req.params.username
}).then((response) => {
    return res.json(response.data);
}).catch((error) => {
    console.error("Error fetching repositories:", error);
}
)
}
module.exports = handler

