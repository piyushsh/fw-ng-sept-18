const express = require('express');
const app = express();

const fs = require("fs");

app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

const getFruit = (req,res) => {

    fs.readFile( "fruit.json" ,"utf8", ( error, fruit ) => {
	       res.json( JSON.parse( fruit ));
    });
}

app.use('/', getFruit );

app.listen(4000, function() {
	console.log('http://localhost:4000/');
})

// npm install
// node server.js
// Open browser at localhost:4000
// Cross-domain requests to this url will return an array of objects.
