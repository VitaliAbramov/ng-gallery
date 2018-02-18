'use strict';

const express = require('express');
const app = express();

let images = require('./images.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  res.send(images);
});


app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

