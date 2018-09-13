
let promise = fetch('./json/region.json');

promise
	.then( response => response.json())

    .then( data => {
        let path = "./json/" + data.region;
		return fetch(path)
    })

	.then( response => response.json())

	.then( data => {
		console.log(JSON.stringify(data))
	})
