const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const bookscontroller = require("../controller/books-controller");

router.get("/", bookscontroller.getAllBooks);
router.post("/", bookscontroller.addBooks);
router.get("/:id", bookscontroller.getById);
router.put("/:id", bookscontroller.updateBook);
router.delete("/:id", bookscontroller.deleteBook);

module.exports = router;
