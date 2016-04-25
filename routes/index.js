var express = require('express');
var router = express.Router();
var weather = require('weather-js');

//read config
var fs = require('fs');
var config = JSON.parse(fs.readFileSync(__dirname+'/../config.json', 'UTF-8'));

/* GET home page. */
router.get('/', function(req, res, next) {

	weather.find({search: config.zip, degreeType: 'F'}, function(err, result) {
	  if(err){res.send("There was an error");}

	  res.render('index', { "cityName": result[0].location.name, "cityTemp": result[0].current.temperature, "cityImg": result[0].current.imageUrl });
	  
	});

  
});

module.exports = router;
