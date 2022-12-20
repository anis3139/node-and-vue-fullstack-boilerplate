const authService = require("../services/authService");

exports.user = async (req, res, next) => {
  let user = authService.getUser();
  res.status(200).json(user);
};

exports.login = async (req, res, next) => {
  res.status(200).json({ message: "Login Successfull" });
};
