// models/contactMessageSchema.js

const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
  namecontact: {
    type: String,
    required: true,
  },
  emailcontact: {
    type: String,
    required: true,
  },
  messagecontact: {
    type: String,
    required: true,
  },
 
},{timestamps:true});

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

module.exports = ContactMessage;