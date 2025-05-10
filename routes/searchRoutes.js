const express = require("express");
const { searchProducts } = require("../controller/searchController");
const router = express.Router();

router.get("/search", searchProducts);

module.exports = router;
