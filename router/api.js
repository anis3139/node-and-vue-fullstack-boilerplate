const express = require("express");
const { user, login } = require("../controller/authController");
const router = express.Router();

router.get("/user", user);
router.get("/login", login);

module.exports = router;
