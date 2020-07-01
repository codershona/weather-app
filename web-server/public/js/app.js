console.log('Client side javscript file is loaded!!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
// 	response.json().then((data) => {
// 		console.log(data)


// 	})

// })


// Another Api:

// fetch('http://localhost:3000/weather?address=!').then(() => {
// 	// fetch('http://localhost:3000/weather?address=').then(() => {

// // fetch('http://localhost:3000/weather?address=boston').then(() => {
//    response.json().then((data) => {
//    	if (data.error) {
//    		console.log(data.error)

//    	} else {
//    		console.log(data.location)
//    		console.log(data.forecast)
     
//    	}

//    })

// })



const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

// const messageOne = document.querySelector('p')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
// const demo = JSON.stringify(data.forecast)

// messageOne.textContent = 'From Javascript'





weatherForm.addEventListener('submit', (e) => {

   e.preventDefault()

   const location = search.value

   messageOne.textContent = 'Loading...'

   messageTwo.textContent = ''


   // console.log('!!!TESTING')
  // console.log(location)


  fetch('http://localhost:3000/weather?address=' + location).then((response) => {
   // fetch('http://localhost:3000/weather?address=').then(() => {

// fetch('http://localhost:3000/weather?address=boston').then(() => {
   response.json().then((data) => {
      if (data.error) {
         // console.log(data.error)
         messageOne.textContent = data.error

      } else {
         
         messageOne.textContent = data.location
       messageTwo.textContent = data.forecast
          // messageTwo.textContent = `It is now ${data.forecast.temparature} degrees out`
           // messageTwo.textContent = `It is now ${data.forecast} degrees out`

         console.log(data.location)
         console.log(data.forecast)

        

        //  messageTwo.textContent = demo

         
     
      }

   })

 })


})




