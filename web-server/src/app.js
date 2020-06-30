const path = require('path')

const express = require('express')

const hbs = require('hbs')

// console.log(__dirname)

// // console.log(__filename)
// console.log(path.join(__dirname, '../public'))


const app = express()

// 

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


app.get('/weather', (req, res) => {
	// res.send('Weather page!!')
	res.send({
		forecast: 'It is snowing',
		location: 'Philadelphia'
	})
})

app.get('/help/*', (req, res) => {
	res.send('Help article not Found!!!!')

})

app.get('*', (req, res) => {
  res.send('My 404 page')

})



// app.com

// app.com/help

// app.com/about

app.listen(3000, () => {

	console.log('Server is up on port 3000.')
})
