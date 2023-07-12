const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-route");
const cors = require("cors");
//Middleweres
app.use(express.json());
app.use(cors());

app.use("/books", router);
const uri =
  "mongodb://Admin:Absarainul027@ac-nplsymv-shard-00-00.lpnaj0n.mongodb.net:27017,ac-nplsymv-shard-00-01.lpnaj0n.mongodb.net:27017,ac-nplsymv-shard-00-02.lpnaj0n.mongodb.net:27017/?ssl=true&replicaSet=atlas-8xy2mh-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then(() => console.log("Connected To MongoDb Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// Absarainul027
