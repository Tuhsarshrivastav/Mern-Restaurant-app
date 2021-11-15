// dependencys
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//imports
const Database = require("./config/database");
const authRoutes = require("./routes/authRoutes");

//db config
Database();

//middlwares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/auth", authRoutes);

//port
const PORT = process.env.port || 5000;
//app listen
app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
});
