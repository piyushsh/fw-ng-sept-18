
const express = require('express')
const router = express.Router()

let storage = require('node-persist');

let d = require('debug')('d')


const empty = ( req,res ) => {

	villages = [];
	storage.setItem('villages', JSON.stringify( villages ))

	.then(function(v) {
		console.log(v);
		res.json( villages );
	})
}

const getVotes = (req,res) => {
	res.json( villages )
}

const vote = (req,res) => {

	villages.push( req.body.village );
	d( JSON.stringify( villages ))

	storage.setItem('villages', JSON.stringify( villages ))
	.then(function(v) {
		console.log(v);
		res.json( villages );
	})


}

router.get('/getvotes',getVotes )
router.post( '/vote', vote )
router.get('/empty',empty )

let villages = [];

storage.init()
	.then(function() {
		storage.getItem('villages')
			.then(function(v) {
				villages = JSON.parse(v)
			})
	});

module.exports = router

// A router function like filmRoute is Express Middleware.
// It must either respond to the request (for example, using res.send)
// or call the next function in the middleware chain.
// The last function in the chain must issue a response.
// When the film/silent url is accessed by a GET verb run a specific function.
// Test POST from command line
// curl -d 'city=copenhagen' http://localhost:4000/film/dogfish -w "\n"
// router.post( /.*fish$/,silentFilmRoute )
// curl -H "Content-Type: application/json" -d '{"city":"Rome"}' http://localhost:4000/film/silent
