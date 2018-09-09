// voteroutes.js

let router = require('express').Router();
let storage = require('node-persist');

// ==================================================

let villages = [];
let testData = [ "Dumpling Green", "Fiddlers Green","Snettisham","Little Snoring" ];

// ==================================================

// Get current stringified data out of store when I start the server.

storage.init()
.then(function() {
    storage.getItem('villages')
    .then( function(v) {
        villages = JSON.parse(v);
    })
})
// ==================================================

// curl -d 'village=Abcd' http://localhost:4000/vote

let vote = (request,response) => {

    // Receives a stringified object: "{ "village" : "Dumpling Green"}"

    villages.push( request.body.village );

    storage.setItem('villages', JSON.stringify( villages ))
    .then(function() {
        return storage.getItem('villages')
    })
    .then( function(v) {
        villages = JSON.parse(v);
        response.json( villages );
    })

}

router.post('/vote',vote );

// ==================================================
let empty = (request,response) => {

	villages = [];

    storage
        .setItem('villages', JSON.stringify( villages ))
        .then(function() {
            response.json( villages );
        })
}

router.get('/empty',empty );

// ==================================================
let getVotes = (request,response) => {
	response.json( villages )
}

router.get('/getvotes',getVotes );
// ==================================================
let testdata = (request,response) => {

    storage
        .setItem('villages', JSON.stringify( testData ))
        .then(function() {
            return storage.getItem('villages')
        })
        .then( function(v) {
            villages = JSON.parse(v);
            response.json( villages );
        })

}

router.get('/testdata',testdata );
// ==================================================

module.exports = router;
