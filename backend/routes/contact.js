const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const router = express.Router();

// Enable CORS for this router (adjust origin as needed)
router.use(cors({
  origin: [
    'http://localhost:3000',         // Local development
    'https://your-frontend-domain.com' // Production frontend domain
  ],
  methods: ['POST'],
}));

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create transport using environment variables for security
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,   // Set in your .env file
      pass: process.env.GMAIL_PASS,   // Set in your .env file (App Password)
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER, // Sends to your own mailbox
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
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;
