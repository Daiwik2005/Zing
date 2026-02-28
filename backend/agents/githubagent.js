// import the required modules using CommonJS
// first get the githubapi.js modules
const { getRepos } = require("../utils/githubapi");

// defining the class for github agent
class GithubAgent {
    // constructor for the class
    constructor(username) {
        this.username = username;
    }
    // method to get the repositories of the user
    async getRepositories() {
        try {
            const repos = await getRepos(this.username);
            return repos;
        } catch (error) {
            console.error("Error fetching repositories:", error);
            throw error;
        }
    }
}
// exporting the class so require() returns it directly
module.exports = GithubAgent;
