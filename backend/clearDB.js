require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    const db = mongoose.connection.db;

    // Clear old data
    await db.collection('users').deleteMany({});
    await db.collection('admins').deleteMany({});
    console.log('Cleared existing users and admins');

    // Create Admin
    const adminPass = await bcrypt.hash('Admin@123', 10);
    await db.collection('admins').insertOne({
      name: 'System Admin',
      email: 'admin@system.com',
      password: adminPass,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    // Create User
    const userPass = await bcrypt.hash('User@123', 10);
    await db.collection('users').insertOne({
      name: 'Test Student',
      email: 's123456@rguktrkv.ac.in',
      password: userPass,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log('Successfully seeded database!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDB();
