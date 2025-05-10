const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    
    
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,

    },
    quantity: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const Product = mongoose.model('Products', productsSchema);
module.exports = Product;