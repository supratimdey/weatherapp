const request = require('request');
let apiKey = '0e32fc352ee82286d41f814b44e4dfe9'
let city = 'Hyderabad'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

request(url,function(err,response, body){
  if (err) {
    console.log('Error :', err);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degree at ${weather.name},${weather.sys.country}`
    console.log(message);
  }
});
