const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT=process.env.PORT || 5000
app.use(cors());
app.use(express.json());
app.use('/backend/contact', contactRoutes);

app.listen(5000, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
