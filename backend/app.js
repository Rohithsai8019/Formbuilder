const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb+srv://sairohithbolisetty:Rohith%40801@cluster0.0i8fb.mongodb.net/form-builder?retryWrites=true&w=majority';  // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Form Builder Backend!');
});

// Import routes
const formRoutes = require('./routes/formRoutes');
app.use('/api/forms', formRoutes);

// 404 handling
app.use((req, res) => {
  res.status(404).send('Sorry, page not found');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
