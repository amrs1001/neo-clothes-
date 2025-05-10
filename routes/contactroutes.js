const express = require('express');
const router = express.Router();
const contactCreate = require('../controller/contactController');


router.post('/contact', contactCreate.submitForm);


module.exports = router;