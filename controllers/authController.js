const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//singup controller
exports.singupController = async (req, res) => {
  //destructuring from req.body
  const { username, email, password } = req.body;
  try {
    const user = await User.find({ email });
    //checking user already exists
    if (user) {
      return res.status(400).json({ errorMessage: "Email already exists " });
    }
    // creating new user
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;

    //hashing user password while signup
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    //saveing new user
    await newUser.save();

    res.json({
      successMessage: "Registration success. Please signin.",
    });
  } catch (error) {
    console.log("signupController error: ", err);
    res.status(500).json({
      errorMessage: "Server error",
    });
  }
};
