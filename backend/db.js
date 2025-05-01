const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
        'mongodb+srv://Mess:pass123@cluster0.solvvxb.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0',
);
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

module.exports = connectDB;