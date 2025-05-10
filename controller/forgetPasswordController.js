const nodemailer = require('nodemailer');
const User = require('../models/userSchema');

const sendResetEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('Email not found');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.error('Transporter verification failed:', error.message);
      } else {
        console.log('Server is ready to take our messages:', success);
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      text: 'Our team will work on resetting your password.',
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).send('Reset email sent');
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return res.status(500).send('Error while sending email: ' + error.message);
  }
};

module.exports = {
  sendResetEmail,
};
