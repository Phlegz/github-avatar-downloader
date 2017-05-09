var request = require('request');
var GITHUB_USER = "Phlegz";
var GITHUB_TOKEN = "dba0c4f050a8693a7a027ddfe6fc088aab009ae3";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);

  //HTTP Headers, such as User-Agent, can be set in the options object. Here, we call the github API. This requires a custom User-Agent header as well as https.
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };
  request(options, cb);
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
}

getRepoContributors("jquery", "jquery", callback);
