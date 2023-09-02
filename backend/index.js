// Absarainul027
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/book-route");
const cors = require("cors");
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

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
      alert("Email already exists");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (error) {
    res.json("notexixt");
    console.log(error);
  }
});

// app.listen(5000, () => {
//   console.log("port connected");
// });
