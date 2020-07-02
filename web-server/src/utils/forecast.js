const request = require('request')


const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=5d603d1b7243e2be9be5afe01e214167&query=' + latitude + ',' + longitude + '&units=f'


  // request({ url: url, json: true }, (error, response) => {
  	// request({ url, json: true }, (error, response) => {
  		request({ url, json: true }, (error, { body }) => {
  	if (error) {
  		callback('Unable to connect to weather service!!!', undefined)

  	// } else if (response.body.error) {
  	} else if (body.error) {
      callback('Unabled to find location!!!!', undefined)

  	} else {

  		// callback(undefined, console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. It feels like " + response.body.current.feelslike + " degress out."))
  		callback(undefined, console.log(body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out."))

  	}

  })

}

module.exports = forecast