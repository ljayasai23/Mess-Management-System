const express = require('express');
const router = express.Router();

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
        projection: { 
          _id: 1, 
          name: 1, 
          email: 1,
          createdAt: 1  // Add this if you want timestamps
        } 
      })
      .toArray();
      
    res.json({
      success: true,
      count: admins.length,
      data: admins
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// For GET /users
router.get('/users', async (req, res) => {
  try {
  
    const users = await req.db.collection('users')
      .find({}, { 
        projection: { 
          _id: 1, 
          name: 1, 
          email: 1,
          createdAt: 1  // Add this if you want timestamps
        } 
      })
      .toArray();
      
      if (users.some(user => !user.name || !user.email)) {
        console.warn('Warning: Some documents are missing required fields');
      }

    res.json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (err) {
    console.error('GET /users failed:', err);
    res.status(500).json({
      success: false,
      error: 'Database error',
      details: err.message
    });
  }
});

// Create operations
// Create Admin with full response
router.post('/add-admin', basicAuth, express.json(), async (req, res) => {
  try {
    // Validate input
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ 
        success: false,
        error: 'Name and email are required' 
      });
    }

    // Check for existing admin
    const existingAdmin = await req.db.collection('admins').findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        error: 'Admin with this email already exists'
      });
    }

    // Create new admin
    const newAdmin = {
      name,
      email,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await req.db.collection('admins').insertOne(newAdmin);
    
    // Return the complete admin document
    const createdAdmin = await req.db.collection('admins').findOne(
      { _id: result.insertedId },
      { projection: { password: 0 } } // Exclude password if exists
    );

    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      data: createdAdmin
    });

  } catch (err) {
    console.error('Add admin error:', err);
    res.status(500).json({
      success: false,
      error: 'Server error',
      details: err.message
    });
  }
});

// Create User with full response
router.post('/add-user', express.json(), async (req, res) => {
  try {
    // Validate input
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required'
      });
    }

    if (!email.endsWith('@rguktrkv.ac.in')) {
      return res.status(400).json({
        success: false,
        error: 'Only @rguktrkv.ac.in emails allowed'
      });
    }

    // Check for existing user
    const existingUser = await req.db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    // Create new user
    const newUser = {
      name,
      email,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await req.db.collection('users').insertOne(newUser);
    
    // Return the complete user document
    const createdUser = await req.db.collection('users').findOne(
      { _id: result.insertedId },
      { projection: { password: 0 } } // Exclude password if exists
    );

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: createdUser
    });

  } catch (err) {
    console.error('Add user error:', err);
    res.status(500).json({
      success: false,
      error: 'Server error',
      details: err.message
    });
  }
});

module.exports = router;