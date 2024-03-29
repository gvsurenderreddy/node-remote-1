var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var YouTube = require('youtube-node');


var index = require('./routes/index');
var remote = require('./routes/remote');

var app = express();


//read config
var fs = require('fs');
var config = JSON.parse(fs.readFileSync(__dirname+'/config.json', 'UTF-8'));

var youtube = new YouTube();
youtube.setKey(config.youtubeKey);
youtube.addParam('type', 'video');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/remote', remote);



app.post('/ytsearch', function(req, res){
  if(req.body.vidTerm){

    //allow cross origin responses
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    youtube.search(req.body.vidTerm, 10, function(err,results){
      if(err){
        console.log(err);
      }else{
        res.send(results);
      }
    });

    return;
  }
});









// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.locals.pretty = true;


module.exports = app;
