'use strict'

const request = require('request');
const fs = require('fs');
const GITHUB_USER = "Phlegz";
const GITHUB_TOKEN = "dba0c4f050a8693a7a027ddfe6fc088aab009ae3";

function downloadImageByURL(url, filePath) {
  var writerStream = fs.createWriteStream(filePath);
  request(url).pipe(writerStream);
}

function processData(err, response, body) {
  if (err) {
    console.log('Error:',err);
    return;
  }
  if (!err && response.statusCode == 200) {
    let info = JSON.parse(body);
    info.forEach((profile) => {
      let avatarURL = profile.avatar_url;
      downloadImageByURL(avatarURL, `./avatars/${profile.login}.jpg`);
    });
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

getRepoContributors(process.argv.slice(2)[0],process.argv.slice(2)[1] , processData);
