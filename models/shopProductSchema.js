
const mongoose = require('mongoose');

const shopProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    category:String
});

module.exports = mongoose.model('ShopProduct', shopProductSchema);
