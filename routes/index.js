var express = require('express');
var router = express.Router();
var weather = require('weather-js');

//read config
var fs = require('fs');
var config = JSON.parse(fs.readFileSync(__dirname+'/../config.json', 'UTF-8'));

//get lan ip
var os = require('os');

//get lan ip
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

var lanIP = addresses[0];

/* GET home page. */
router.get('/', function(req, res, next) {
 
  weather.find({search: config.location, degreeType: 'F'}, function (err, result) {
    if (err) {
      res.send("There was an error");
    }
 
    res.render('index', {
      "cityName": result[0].location.name, "cityTemp": result[0].current.temperature,
      "cityImg": result[0].current.imageUrl, "feelsLike": result[0].current.feelslike,
      "wind": result[0].current.winddisplay, "humidity": result[0].current.humidity,
      "day2": result[0].forecast[2].day, "day2Low": result[0].forecast[2].low, "day2High": result[0].forecast[2].high,
      "day2Precip": result[0].forecast[2].precip, "day3": result[0].forecast[3].day, "day3Low": result[0].forecast[3].low,
      "day3High": result[0].forecast[3].high, "day3Precip": result[0].forecast[3].precip, "day4": result[0].forecast[4].day,
      "day4Low": result[0].forecast[4].low, "day4High": result[0].forecast[4].high,
      "day4Precip": result[0].forecast[4].precip,
      "lanIP":lanIP});
 
  });
});
module.exports = router;