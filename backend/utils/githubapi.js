const axios = require("axios");
const BASE_URL = "https://api.github.com";
const headers = {
 Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
};
async function getRepos(username){

 const res = await axios.get(
  `${BASE_URL}/users/${username}/repos`,
  { headers }
 );

 return res.data;
}
module.exports={getRepos}


