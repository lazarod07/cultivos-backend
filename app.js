const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cultivoController = require("./controllers/cultivoController");
const userController = require("./controllers/userController");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/cultivo", cultivoController);
app.use("/user", userController);

mongoose
  .connect(process.env.DB_HOST)
  .then((res) => {
    console.log("BD CONNECTED");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`RUNNING ON PORT:${port}`);
});
