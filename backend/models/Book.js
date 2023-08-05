const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },

  image: {
    type: String,
    require: true,
  },
});

const registerSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const BookModel = mongoose.model("Book", bookSchema);
const RegisterModel = mongoose.model("Register", registerSchema);

module.exports = { BookModel, RegisterModel };
