const handler = require("./agents/githubagent")
const exp=require("express")
const app=exp()
const cors = require("cors")
app.use(cors())


// require the agent class; githubagent.js exports the class itself
app.get("/repos/:username", handler)
// start the server on port 3000 (or use env PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
