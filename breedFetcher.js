const request = require('request');
const breed = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("the breed not found");
    }
    else { console.log(data[0].description); }
  }
})