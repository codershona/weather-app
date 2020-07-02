const path = require('path')

const express = require('express')

const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)

// // console.log(__filename)
// console.log(path.join(__dirname, '../public'))


const app = express()
const port = process.env.PORT || 3000


const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')


// setup handlebars engine and views

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


// setup static directory: 

app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
	res.render('index', {
		// title: 'Weather Apps',
		title: 'Weather',
		name: 'Jonny John'
	})

})


app.get('/about', (req, res) => {

	res.render('about', {
		title: 'About Me!!',
		name: 'Jonnnhnaa jonny'
	})

})

// app.get('', (req, res) => {
// 	// res.send('Hello express!')
// 	res.send('<h1>WEATHER APP!!</h1>')

// })




// app.get('/help', (req, res) => {
   
//    // res.send('Help page!!')
//    // res.send({
//    // 	name: 'Jonny',
//    // 	age: 26


//    // })

//    res.send([{
//    	name: 'Jonny'

//    }, {

//    	name: 'Sunny'

//    }])


// })


// app.get('/about', (req, res) => {
//      // res.send('About')
//      res.send('<h1>About</h1>')

// })


app.get('/help', (req, res) => {
	res.render('help', {
		helpText: 'This is some helpful contents!!',
		title: 'Help',
		name: 'Jonny !!'

	})
})


// app.get('/weather', (req, res) => {
// 	// res.send('Weather page!!')
// 	res.send({
// 		forecast: 'It is snowing',
// 		location: 'Philadelphia'
// 	})
// })

app.get('/weather', (req, res) => {
	// res.send('Weather page!!')

     if (!req.query.address) {
      return res.send({
      	error: 'YOU NEED TO PROVIDE YOUR ADDRESS'

      })

     }

    
      geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
     
       if (error) {
       	return res.send({ error })

       }

       forecast(latitude, longitude, (error, forecastData) => {
       	if (error) {
       		return res.send({ error })
       	}

       	res.send({
       		forecast: forecastData,
       		location,
       		address: req.query.address
       	})

       })

      })
  })

	// res.send({
	// 	forecast: 'It is snowing',
	// 	location: 'Philadelphia',
	// 	address: req.query.address
	// })
// })


// app.get('/weather', (req, res) => {
// 	// res.send('Weather page!!')

//      if (!req.query.address) {
//       return res.send({
//       	error: 'YOU NEED TO PROVIDE YOUR ADDRESS'

//       })

//      }



// 	res.send({
// 		forecast: 'It is snowing',
// 		location: 'Philadelphia',
// 		address: req.query.address
// 	})
// })





app.get('/products', (req, res) => {
	// res.send('Weather page!!')
	// req.query
	// console.log(req.query)
	if (!req.query.search) {
      return res.send({
      	error: 'YOU MUST PROVIDES SEARCH TERMS'


      })

	} 
	
	console.log(req.query.search)
	res.send({

		products: []

	})
})



app.get('/help/*', (req, res) => {
	// res.send('Help article not Found!!!!')
	res.render('404', {
		title: '404',
		name: 'John',
		errorMessage: 'Help article NOT found!!'
	})


})

app.get('*', (req, res) => {
  // res.send('My 404 page')

  res.render('404', {
  	title: '404',
  	name: 'Johnn Papa',
  	errorMessage: 'PAGE NOT FOUND!!!!'
  })

})



// app.com

// app.com/help

// app.com/about

// app.listen(3000, () => {

// 	console.log('Server is up on port 3000.')
// })

app.listen(port, () => {

	console.log('Server is up on port ' + port)
	
})
