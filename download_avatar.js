var request = require('request');
var GITHUB_USER = "Phlegz";
var GITHUB_TOKEN = "dba0c4f050a8693a7a027ddfe6fc088aab009ae3";


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
