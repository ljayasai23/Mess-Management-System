const express = require('express');
const connectDB = require('./db.js');  // Ensure correct path to db.js
const app = express();
const itemModel = require('./models/Items.js'); // Ensure correct path to Items.js
const cors = require('cors');

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());

// Connect to MongoDB before starting the server
connectDB()

app.get('/', (req, res) => {
  const items = itemModel.find()
  res.json(items)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
