const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=5d603d1b7243e2be9be5afe01e214167&query=37.8267,-122.4233&units=f'
// const url = 'http://api.weatherstack.com/current?access_key=5d603d1b7243e2be9be5afe01e214167&query=37.8267,-122.4233&units=m'
// const url = 'http://api.weatherstack.com/current?access_key=5d603d1b7243e2be9be5afe01e214167&query=37.8267,-122.4233&units=s'

request({ url: url, json: true }, (error, response) => {
	// console.log(response)
	// const data = JSON.parse(response.body)
	// // console.log(data)
	// console.log(data.current)


    // customizing https request:
    // Darksky : console.log(response.body.currently)
  // weatherstack: console.log(response.body.current)
    // console.log(response.body.current)

    // console.log("It is currently " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degress out.")

    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degress out.")

   // run node app.js




})

















// console.log('Staring')


// setTimeout(() => {
// 	console.log('2 Second Timer')

// }, 2000)

// setTimeout(() => {
// 	console.log('0 Second Timer')

// }, 0)

// // method 1 :
// // const x = 1

// // const y = x + 2

// // console.log('Sum is ' + y)

// // Call Stack ----> 
//          // console.log('Phillips')
//          // anonymous('Phillips')
//             // forEach(...)
//              // listLocations([...])
//              //   main()

//              // Results: Phillips
             

// // method 2:
// // const listLocations = (locations) => {
// 	// locations.forEach((location) => {
//       // console.log(location)

// 		// })

// // }

// // const myLocations = ['Phllips', 'NYC']

// // listLocations(myLocations)




// console.log('Stopping')





// // method 3:

// // console.log('Strating up')

// // setTimeout(() => {
// 	// console.log('Two seconds')

// // }, 2000)

// // setTimeout(() => {
// 	// console.log('Zero seconds')

// // }, 0)

// // console.log('Finishing up!')

// // Call Stack -->

//     // console.log('Fin....') 
//     // console.log('Zero ....') 

//     /// main()

//     // Callback (2 sec)


//  // Node APIs ---> 

//     // setTimeout (2 sec)
//     // setTimeout (0 sec)

// // Callback Queue(Event Loop) --->

//     // Callback (0 sec)


//  // Result : starting up
