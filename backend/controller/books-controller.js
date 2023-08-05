const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(400).json({ message: "No Books Found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "Book not found by id" });
  }
  return res.status(200).json({ book });
};

const addBooks = async (req, res, next) => {
  const { name, author, description, price, image } = req.body;
  let book;

  try {
    book = new Book({
      name,
      author,
      description,
      price,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Books not Enable to Add" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;

  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = Book.save();
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(404).json({ message: "Book not update by id" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;

  try {
    book = await Book.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "Book not Deleted by id" });
  }
  return res.status(200).json({ message: "Book Successfully deleted" });
};

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
