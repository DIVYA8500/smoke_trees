// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initModels, User, Address } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize models and sync with DB
initModels();

// POST /register route to handle form submission
app.post('/register', async (req, res) => {
  const { name, address } = req.body;
  try {
    const user = await User.create({ name });
    const userAddress = await Address.create({ address, userId: user.id });
    res.status(201).json({ message: 'User and address saved', user, userAddress });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data', details: error });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
