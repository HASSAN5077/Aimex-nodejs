const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password."],
    minlength: [6, "Password should be atleast 6 characters long."],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  first_name: {
    type: String,
    required: [true, "Please enter your first name"],
    minlength: [3, "Name should be atleast 3 characters long."],
    maxlength: [25, "Name should have less than 25 characters."],
  },
  last_name: {
    type: String,
    required: [true, "Please enter your last name"],
    minlength: [3, "Name should be at least 3 characters long."],
    maxlength: [25, "Name should have less than 25 characters."],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};
userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};
userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};
module.exports = mongoose.model("User", userSchema);
