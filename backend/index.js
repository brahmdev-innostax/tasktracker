const path = require("path");
console.log(path.join(__dirname, "../"));
require("dotenv").config(path.join(__dirname, "../"));

const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");

const app = express();

const morgan = require("morgan");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello from backend" });
});

app.listen(4000, () => {
  console.log(`App running on port=4000`);
});
