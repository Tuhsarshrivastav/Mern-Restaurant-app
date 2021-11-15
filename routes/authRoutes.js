const express = require("express");
const router = express.Router();
const {
  singupController,
  signinController,
} = require("../controllers/authController");
const {
  singupValidator,
  validatorResult,
} = require("../middlewares/validators");

router.post("/singup", singupController, validatorResult, singupValidator);
router.post("/singin", singupController, validatorResult, signinController);

module.exports = router;
