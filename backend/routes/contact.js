const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maharapratik5@gmail.com',       // replace with your Gmail
      pass: 'yihu njwy uvyj mpcb'            // use App Password, not actual password
    }
  });

  const mailOptions = {
    from: email,
    to: 'maharapratik5@gmail.com',
    subject: `New Contact from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;
