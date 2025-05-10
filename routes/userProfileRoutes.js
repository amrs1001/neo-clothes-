// routes/userProfileRoutes.js
const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controller/userProfileController");
const router = express.Router();

router.get("/userProfile", getUserProfile);
router.post("/userProfile", updateUserProfile);

module.exports = router;
