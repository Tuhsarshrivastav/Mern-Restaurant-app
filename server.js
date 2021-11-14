// dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')

//imports
const Database = require("./config/database");

//db config
Database();

//middlwares
app.use(express.json())
app.use(cors())


//routes

//port
const PORT = process.env.port || 5000;
//app listen
app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
});
