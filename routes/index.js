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

	weather.find({search: config.zip, degreeType: 'F'}, function(err, result) {
	  if(err){res.send("There was an error");}

	  res.render('index', { "lanIP": lanIP, "cityName": result[0].location.name, "cityTemp": result[0].current.temperature, "cityImg": result[0].current.imageUrl });
	  
	});

  
});

module.exports = router;
