const mongoose = require('mongoose')

mongoose.model('Book', {
  //title, author, numberpages, publisher
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  numberpages: {
    type: Number,
    require: false
  },
  publisher: {
    type: String,
    require: false
  }
})