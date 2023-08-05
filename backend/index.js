// Absarainul027
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-route");
const cors = require("cors");
const { RegisterModel } = require("./models/Book");
// Middlewares
app.use(express.json());
app.use(cors());

app.use("/books", router);
const uri =
  "mongodb://Admin:Absarainul027@ac-nplsymv-shard-00-00.lpnaj0n.mongodb.net:27017,ac-nplsymv-shard-00-01.lpnaj0n.mongodb.net:27017,ac-nplsymv-shard-00-02.lpnaj0n.mongodb.net:27017/?ssl=true&replicaSet=atlas-8xy2mh-shard-0&authSource=admin&retryWrites=true&w=majority"; // Your MongoDB URI
mongoose
  .connect(uri)
  .then(() => console.log("Connected To MongoDB Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

app.post("/register", (req, res) => {
  console.log("Received registration request:", req.body);

  RegisterModel.create(req.body)
    .then((user) => {
      console.log("User registered:", user);
      res.json(user);
    })
    .catch((error) => {
      console.error("Error registering user:", error);
      res.status(500).json({ error: "An error occurred during registration." });
    });
});
