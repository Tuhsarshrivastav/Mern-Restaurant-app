const express = require("express");
const router = express.Router();
const {singupController} = require("../controllers/authController");
const {singupValidator,validatorResult} = require('../middlewares/validators')
router.post("/singup", singupController ,validatorResult,singupValidator);

module.exports = router;
