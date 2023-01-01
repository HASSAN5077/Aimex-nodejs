const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  forgotPassword,
  resetPassword,
} = require("../controller/userController");
const { isAuthenticatedUser } = require("../utils/auth");

const router = express.Router();
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/forgot_password").post(forgotPassword);
router.route("/reset_password/:token").post(resetPassword);

module.exports = router;
