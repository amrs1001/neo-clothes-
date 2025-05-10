const Admin = require("../models/adminSchema");
const bcrypt = require("bcryptjs");

const loginAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return res.status(404).send("Admin not found");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, admin.password);
    if (isPasswordMatch) {
      console.log("Admin login successful");
      return res.redirect("admin"); // or wherever the admin dashboard is
    } else {
      return res.status(401).send("Incorrect password");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred");
  }
};

module.exports = { loginAdmin };
