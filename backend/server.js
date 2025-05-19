const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
require('dotenv').config();  

const app = express();
const PORT = process.env.PORT || 5000;
<<<<<<< HEAD


app.use(cors({
  origin: [
    'http://localhost:3000',          
    'https://your-frontend-domain.com' 
  ],
  methods: ['POST', 'GET', 'OPTIONS'], 
}));

app.use(express.json());


app.use('/backend/contact', contactRoutes);

=======

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
>>>>>>> f2cc5782a990b6b825c4cffe2c60fc5501573b22

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
