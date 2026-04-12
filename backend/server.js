require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.db = mongoose.connection.db;
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ Connection failed:', err.message);
    process.exit(1);
  });

// Routes
app.use('/api', require('./routes/authRoutes'));

// Simple root route
app.get('/', (req, res) => res.json({
  message: 'Server running',
  endpoints: {
    admins: 'GET /api/admins',
    users: 'GET /api/users',
    addAdmin: 'POST /api/add-admin',
    addUser: 'POST /api/add-user'
  }
}));

console.log(process.env.API_KEY)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
