const express = require('express');
// Update your CORS configuration
app.use(cors({
  origin: 'https://codestack-frontend.onrender.com', // Replace with your actual frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/backend/contact', contactRoutes);

// 👇 Add this default GET route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
  console.log('GET request received at /');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
