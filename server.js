// dependencys
require("dotenv").config();
const express = require("express");
const app = express();

//imports

//db config

//middlwares

//routes

//port
const PORT = process.env.port || 5000;
//app listen
app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
});
