const request = require('request');
const express = require('express')
const bodyParser = require('body-parser');

//let apiKey = '0e32fc352ee82286d41f814b44e4dfe9';


const app = express()


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null})
})

app.post('/' , function (req,res) {
    let city = req.body.City;
    let apiKey = require('./config/apikey')
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    request(url,function(err,response, body){
        if (err) {
          console.log('Error :', err);
          res.render('index',{ weather: null, error: 'Error, please try again'} )
        } else {
          let weather = JSON.parse(body);
          
          let weatherText = `It's ${weather.main.temp} degree c at ${weather.name},${weather.sys.country}`
          console.log(weatherText);
          res.render('index', {weather: weatherText, error: null});
        }
      });


})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})