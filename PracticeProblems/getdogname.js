// import axios from 'axios';
const axios = require('axios'); // legacy way
const fs = require('fs')


// Make a request for a user with a given ID
axios.get('https://dog.ceo/api/breed/hound/images/random')

  .then(function (response) {
    axios({
        method: 'get',
        url: (response.data.message), //pulling info from url and assigning it to this variable called url
        // timeout: 3000,
        responseType: 'stream'
      })
        .then(function (response) {
          response.data.pipe(fs.createWriteStream('hound_hound.jpg')) //creates the file
          fs.appendFile("./downloadedDogs.txt", `\n ${response.data.responseUrl}`, // (\n) how to tell program to write a new line. .join is for arrays
          function(err) { //ASK BRIAN WHY RESPONSE URL WAS NOT WORKING WITH JUST MESSAGE
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        });
        
  })
  .catch(function (error) { //catch is for errors with API, tells you if there is something wrong with the API
    // handle error
    console.log(error);
  })

  axios.get('https://dog.ceo/api/breed/shiba/images/random')
  .then(function (response) {
    axios({
        method: 'get',
        url: (response.data.message), //pulling info from url and assigning it to this variable called url
        // timeout: 3000,
        responseType: 'stream'
      })
        .then(function (response) {
          response.data.pipe(fs.createWriteStream('shiba_shiba.jpg')) //creates the file
          fs.appendFile("./downloadedDogs.txt", `\n ${response.data.responseUrl}`,
          function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  axios.get('https://dog.ceo/api/breed/dachshund/images/random')
  .then(function (response) {
    axios({
        method: 'get',
        url: (response.data.message), //pulling info from url and assigning it to this variable called url
        // timeout: 3000,
        responseType: 'stream'
      })
        .then(function (response) {
          response.data.pipe(fs.createWriteStream('dachshund_dachshund.jpg')) //creates the file
          fs.appendFile("./downloadedDogs.txt", `\n ${response.data.responseUrl}`,
          function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
        });
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })













