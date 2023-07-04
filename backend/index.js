const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const morgan = require("morgan");

const app = express();

const PORT = process.env.BACKEND_APP_PORT | 4000;
const MONGODB_URI =
  "mongodb+srv://root:toor@innostax.g3v2pig.mongodb.net/?retryWrites=true&w=majority/tastTracker";

const todoRoutes = require("./routes/todo");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/",
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
    abortOnLimit: true,
    safeFileNames: true,
    limitHandler: (req, res, next) => {
      const err = new Error("File too large, max 10MB is expected");
      err.httpStatusCode = 413;
      return next(err);
    },
  })
);

app.use((req, res, next) => {
  if (req.files) {
    const file = req.files.image;
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/png"
    ) {
      return next();
    }
    const err = new Error("Invalid File. PNG, JPG, JPEG are allowed strictly.");
    err.httpStatusCode = 500;
    return next(err);
  }
  next();
});

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello from backend" });
});

app.use("/todo", todoRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  return res.status(error.httpStatusCode || 500).json({
    status: "ERROR",
    errorMessage: error.message,
    errorStatusCode: error.httpStatusCode,
  });
});

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => {
    app.listen(PORT, () => {
      console.log("DATABASE CONNECTED");
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
