var express = require('express');
var router = express.Router();
var weather = require('weather-js');

/* GET home page. */
router.get('/', function(req, res, next) {

	weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
	  if(err){res.render('index', { title: 'Express' });}
	 
	  //console.log(JSON.stringify(result, null, 2));

	  res.render('index', { title: result[0].location.name });
	  
	});

  
});

module.exports = router;
