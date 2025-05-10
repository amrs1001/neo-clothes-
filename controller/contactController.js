// controllers/contactController.js

const ContactMessage = require('../models/contactMessageSchema');

const submitForm = async (req, res) => {
    const { namecontact, emailcontact, messagecontact } = req.body;
    try {
        const newMessageContact = await ContactMessage.create({ namecontact, emailcontact, messagecontact });
        res.status(201).json(newMessageContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { submitForm };
