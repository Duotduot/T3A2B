const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose  = require('mongoose');
const userRoutes = require('./routes/users');
const classRoutes = require('./routes/classes');
const workoutRoutes = require('./routes/workout');
const nutritionRoutes = require('./routes/nutrition');

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
app.use('/api/classes', classRoutes);
app.use('/api/workout', workoutRoutes);
app.use('/api/nutrition', nutritionRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Hello, this is the Gym App backend.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});