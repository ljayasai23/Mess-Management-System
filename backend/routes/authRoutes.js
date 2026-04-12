const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Basic auth middleware (just for this file)
const API_KEY = process.env.API_KEY || 'mysecretkey';
const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${API_KEY}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Admin routes
// For GET /admins
router.get('/admins', basicAuth, async (req, res) => {
  try {
    const admins = await req.db.collection('admins')
      .find({}, { 
        projection: { _id: 1, name: 1, email: 1, createdAt: 1 } 
      })
      .toArray();
      
    res.json({ success: true, count: admins.length, data: admins });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// For GET /users
router.get('/users', async (req, res) => {
  try {
    const users = await req.db.collection('users')
      .find({}, { 
        projection: { _id: 1, name: 1, email: 1, createdAt: 1 } 
      })
      .toArray();

    res.json({ success: true, count: users.length, data: users });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Database error', details: err.message });
  }
});

// LOGIN Endpoint
router.post('/login', express.json(), async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    // Check users first
    let user = await req.db.collection('users').findOne({ email });
    let role = 'user';

    // If not a user, check admins
    if (!user) {
      user = await req.db.collection('admins').findOne({ email });
      role = 'admin';
    }

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    res.json({
      success: true,
      message: 'Login successful',
      role,
      user: { id: user._id, name: user.name, email: user.email }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, error: 'Server error', details: err.message });
  }
});

// Create operations
// Create Admin with full response
router.post('/add-admin', basicAuth, express.json(), async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: 'Name, email, and password are required' });
    }

    const existingAdmin = await req.db.collection('admins').findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ success: false, error: 'Admin with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await req.db.collection('admins').insertOne(newAdmin);
    
    // Return the complete admin document without password
    const createdAdmin = await req.db.collection('admins').findOne(
      { _id: result.insertedId },
      { projection: { password: 0 } }
    );

    res.status(201).json({ success: true, message: 'Admin created successfully', data: createdAdmin });
  } catch (err) {
    console.error('Add admin error:', err);
    res.status(500).json({ success: false, error: 'Server error', details: err.message });
  }
});

// Create User with full response
router.post('/add-user', express.json(), async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: 'Name, email, and password are required' });
    }

    if (!email.endsWith('@rguktrkv.ac.in')) {
      return res.status(400).json({ success: false, error: 'Only @rguktrkv.ac.in emails allowed' });
    }

    const existingUser = await req.db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await req.db.collection('users').insertOne(newUser);
    
    const createdUser = await req.db.collection('users').findOne(
      { _id: result.insertedId },
      { projection: { password: 0 } }
    );

    res.status(201).json({ success: true, message: 'User created successfully', data: createdUser });
  } catch (err) {
    console.error('Add user error:', err);
    res.status(500).json({ success: false, error: 'Server error', details: err.message });
  }
});

module.exports = router;