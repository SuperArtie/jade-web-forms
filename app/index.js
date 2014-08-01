'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/calc', function(req, res){
  res.render('calc');
});

app.post('/calc', function(req, res){
    switch(req.body.operator){
      case '+':
        var sum = (req.body.x * 1) + (req.body.y * 1);
        break;
      case '-':
        sum = (req.body.x * 1) - (req.body.y * 1);
        break;
      case '*':
        sum = (req.body.x * 1) * (req.body.y * 1);
        break;
      case '/':
        sum = (req.body.x * 1) / (req.body.y * 1);
}
  res.render('calc', {sum:sum});
});


app.get('/boxes', function(req, res){

  res.render('box1');
});

app.post('/boxes', function(req, res){
  var count  = req.body.count * 1;
  var width  = req.body.width.split('-');
  var height = req.body.height.split('-');
  var colors = req.body.colors.split(',');

  width = width.map(function(x){
    return x * 1;
  });

  height = height.map(function(x){
    return x * 1;
  });

  res.render('box2', {count:count, width:width, height:height, 
              colors:colors});
});

var port = process.env.PORT;

app.listen(port, function(){
  console.log('Express is now listening on PORT', port);
});
