const express = require('express');
const loginCreate = require('../controller/loginController');
const forgetPasswordController = require('../controller/forgetPasswordController');

const router = express.Router();


// Login route
router.post('/login',loginCreate.loginUser);

router.post('/forgetPassword', forgetPasswordController.sendResetEmail);



module.exports = router;