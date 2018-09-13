const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const film = require('./village.js');

app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/village', film);

app.listen(4000, function() {
	console.log('Server running on port 4000');
})


// Start server:
// DEBUG=d nodemon server.js

// Test POST without a form using CURL:
// curl -d 'village=Dumping%20Green' http://localhost:4000/village/vote -w "\n"
