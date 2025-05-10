// controllers/userProfileController.js
const User = require("../models/userSchema");



const getUserProfile = async (req, res) => {
  try {
    const user = req.cookies.user;
        // Assuming user data stored in cookies has enough details
        res.render("userProfile", { user });
    }
 catch (error) {
    console.error( error);
    res.status(500).send("Internal Server Error");
}};



const updateUserProfile = async (req, res) => {
    try {
      const userId = req.cookies.userId;
      if (!userId) {
        return res.redirect("/login");
      }
  
      const { name,  phone } = req.body;
  
      await User.findByIdAndUpdate(userId, {
        fullName: name,
        phoneNumber: phone,
      });
  
      res.redirect("/userProfile");
    } catch (error) {
      console.error(error);
      res.send("An error occurred while updating user data");
    }
  };
  
  module.exports = { getUserProfile, updateUserProfile };
