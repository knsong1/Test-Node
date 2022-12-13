// import axios from 'axios';
const axios = require('axios'); // legacy way
const fs = require('fs')

// Make a request for a user with a given ID
axios.get('https://dog.ceo/api/breeds/image/random')
  .then(function (response) {
    axios({
        method: 'get',
        url: (response.data.message), //pulling info from url and assigning it to this variable called url
        responseType: 'stream'
      })
        .then(function (response) {
          response.data.pipe(fs.createWriteStream('dog.jpg')) //creates the file
        });
    console.log(response.data.message);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })