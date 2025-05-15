const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration
app.use(cors({
  origin: 'https://codestack-frontend.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Either use this (preferred):
app.use('/contact', contactRoutes);
// Or keep your current route but update frontend to match

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
