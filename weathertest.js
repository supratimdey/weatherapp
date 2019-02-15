const request = require('request');
const argv = require('yargs').argv;

let apiKey = '0e32fc352ee82286d41f814b44e4dfe9'
let city = argv.c ||'Hyderabad'
let url =
 `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// calling the rquest 
request(url,function(err,response, body){
  if (err) {
    console.log('Error :', err);
  } else {
    let weather = JSON.parse(body);
    console.log(weather);
    let message = `It's ${weather.main.temp} degree F at ${weather.name},${weather.sys.country}`
    console.log(message);
  }
});

// this one is just a test program 