const express = require("express");
const router = express.Router();
const adminLoginController = require("../controller/AdminLoginController");

router.post("/adminLogin", adminLoginController.loginAdmin);

module.exports = router;
