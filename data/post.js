const axios = require('axios')
const data = require('./books.json')
const uri = 'http://localhost:4545/book'
const length = data.length
var body

async function post(params) {


  for (let i = 0; i < length; i++) {
    body = {
      title: data[i].title,
      author: data[i].author,
      numberpages: data[i].numberpages,
      publisher: data[i].publisher,
    }


    console.log('BODY ==', body)

    var request = {
      method: 'POST',
      url: uri,
      data: body
    }

    try {
      response = await axios(request)
    } catch (error) {
      console.log('ERROR:', err)
    }
  }
}

post()