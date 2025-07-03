const { error } = require('console')
const Book = require('../models/book')

//Creating a new book

exports.createBook = async (req, res) => {
    try {
        const { name, author, year, description, amount } = req.body
        const newBook = new Book({ name, author, year, description, amount })
        const savedBook = await newBook.save()
        res.json(savedBook)
    } catch {
        res.status(500).json({error:error.message})
    }
}

// Getting all Books

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
        
    } catch {
        res.status(500).json({error:error.message})
    }

}

// Getting a specific book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Updating a book by ID
exports.updateBookById = async (req, res) => {
  try {
    const { amount} = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { amount },
      { new: true }
    );
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deleting a book by ID
exports.deleteBookById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
