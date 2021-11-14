const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error.stack);
  }
};
module.exports = Connection;
