const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
require('dotenv').config();  

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: [
    'http://localhost:3000',          
    'https://your-frontend-domain.com' 
  ],
  methods: ['POST', 'GET', 'OPTIONS'], 
}));

app.use(express.json());


app.use('/backend/contact', contactRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
