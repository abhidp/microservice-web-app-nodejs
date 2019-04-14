const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./Book')
const mongoose = require('mongoose')
const Book = mongoose.model('Book')

app.use(bodyParser.json())

mongoose.connect('mongodb://abhiadmin:Pass1234@bookserverice-shard-00-00-nepfn.gcp.mongodb.net:27017,bookserverice-shard-00-01-nepfn.gcp.mongodb.net:27017,bookserverice-shard-00-02-nepfn.gcp.mongodb.net:27017/test?ssl=true&replicaSet=bookserverice-shard-0&authSource=admin&retryWrites=true', () => {
  console.log('Connected to Database')
})

app.get('/', (req, res) => {
  res.send('This is our main endpoint now with NODEMON!!')
})

app.post('/book', (req, res) => {

  var newBook = {
    title: req.body.title,
    author: req.body.author,
    numberpages: req.body.numberpages,
    publisher: req.body.publisher
  }
  
  //create a new book
  var book = new Book(newBook)

  book.save().then(() => {
    console.log('New Book Created')
  }).catch((err) => {
    throw err
  })

  res.send('New Book Created')
})

app.get('/books', (req, res) => {
  Book.find().then((books) => {
    console.log('books', books)
    res.json(books)
  }).catch(err => {
    if (err) throw err
  })
})

app.get('/book/:id', (req, res) => {
  Book.findById(req.params.id).then((book) => {
    if (book) {
      res.json(book)
    } else {
      res.sendStatus(404)
    }
  }).catch(err => {
    if (err) throw err
  })
})

app.listen(4545, () => {
  console.log('Up and Running!')
})