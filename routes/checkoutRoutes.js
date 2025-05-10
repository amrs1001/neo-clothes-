// routes/checkoutRoutes.js
const express = require("express");
const router = express.Router();
const checkoutController = require("../controller/checkoutController");

router.post("/checkout", checkoutController.processCheckout);

module.exports = router;