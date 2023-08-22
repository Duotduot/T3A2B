const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose  = require('mongoose');
const userRoutes = require('./routes/users');

// Connect to MongoDB
mongoose.connect('mongodb+srv://13892:dorryInc041@cluster.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Hello, this is the Gym App backend.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});