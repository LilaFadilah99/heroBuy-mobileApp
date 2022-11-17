if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);
app.use(errorHandler);

module.exports = app;
