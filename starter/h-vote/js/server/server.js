// server.js

// ROUTES:
// addVote route : POST : { village : "Abcd"}
// empty : GET : []
// getVotes : GET : return array

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let routes = require("./voteroutes");

let morgan = require("morgan");
app.use(morgan("dev"));

const PORT = 4000;

// =====================================
// Allow cross-domain requests from non-localhost:4000 urls
app.use( function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
      next();
  });
// =====================================
// Do this so that it will allow me to see
// request.body when I do HTTP POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// =====================================
app.use( "/" , routes );
// =====================================
app.listen(PORT, () => {
  console.log('http://localhost:4000/testdata' );
  console.log('http://localhost:4000/empty' );
  console.log('http://localhost:4000/getvotes' );
  console.log('http://localhost:4000/vote' );
})
