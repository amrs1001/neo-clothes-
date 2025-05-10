const express = require("express");
const adminController = require('../controller/AdminController');
const { getUserCount } = require('../controller/AdminController');
const multer = require('multer');
const router = express.Router();

// Configure Multer for file uploads
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

// Define the routes for the admin functionalities
router.post('/AddProduct', upload.single('image'), adminController.AddProducts);
router.get('/', adminController.getProducts);
router.post('/deleteProduct', adminController.deleteProduct);
router.put('/edit/:id', upload.single('image'), adminController.editProduct); // Handle image uploads
router.get("/userCount", getUserCount);
router.get("/Dashboard", (req, res) => {
    res.render("admin");
  });
module.exports = router;
