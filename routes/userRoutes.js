const express = require('express');
const signUpCreate = require('../controller/signUpController');
const router = express.Router();

router.post('/signUpRegister', signUpCreate.saveUser);


module.exports = router;
