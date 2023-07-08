const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-route")
//Middleweres
app.use(express.json())
app.use('/books', router)


mongoose
  .connect(
    "mongodb+srv://Admin:Absarainul027@cluster0.lpnaj0n.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To MongoDb Database"))
  .then(() => {
    app.listen(5000);
  }).catch((err)=>console.log(err))

// Absarainul@027
