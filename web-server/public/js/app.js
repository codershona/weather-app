console.log('Client side javscript file is loaded!!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
	response.json().then((data) => {
		console.log(data)


	})

})


// Another Api:

// fetch('http://localhost:3000/weather?address=!').then(() => {
	// fetch('http://localhost:3000/weather?address=').then(() => {

fetch('http://localhost:3000/weather?address=boston').then(() => {
   response.json().then((data) => {
   	if (data.error) {
   		console.log(data.error)

   	} else {
   		console.log(data.location)
   		console.log(data.forecast)
     
   	}

   })

})

