'use strict'

const request = require('request');
const GITHUB_USER = "Phlegz";
const GITHUB_TOKEN = "dba0c4f050a8693a7a027ddfe6fc088aab009ae3";


function displayAvatarURL(profile) {
  console.log('avatar URL: ', profile.avatar_url);
}

function processData(err, response, body) {
  if (err) {
    console.log('Error:',err);
    return;
  }
  if (!err && response.statusCode == 200) {
    let info = JSON.parse(body);
    info.forEach(displayAvatarURL);
  }
}

function getRepoContributors(repoOwner, repoName, cb) {
  const requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  const options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'   //HTTP Headers, such as User-Agent, can be set in the options object. Here, we call the github API. This requires a custom User-Agent header as well as https.
    }
  };
  request(options, cb);
}

getRepoContributors("jquery", "jquery", processData);
