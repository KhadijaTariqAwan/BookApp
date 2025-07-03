const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    author: {
        type: String,
        require:true
    },
    year: {
        type: Number,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    Genre: {
        type: String,
        require:true
    },
    amount: {
        type: Number,
        require:true
    }

})

const Book = mongoose.model('book', bookSchema)

module.exports = Book