const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGODB_URL;
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello!");
});

app.listen(PORT, () => console.log("Example app listening on port {$PORT}"));

 
async function connect() {
  try {
    await mongoose.connect(mongoURL);

    console.log("db connected!");
  } catch (error) {
    console.log(error);
  }
}

connect();
