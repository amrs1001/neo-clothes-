const express = require('express');
const forgetPasswordController = require('../controller/forgetPasswordController');
const router = express.Router();

// Forget Password route
router.post('/forgetPassword', forgetPasswordController.sendResetEmail);

module.exports = router;
