const express = require('express');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const usersFile = './data/users.json';
const SECRET = 'corefit-secret-key';

// Load user data
function loadUsers() {
  if (!fs.existsSync(usersFile)) return {};
  return JSON.parse(fs.readFileSync(usersFile));
}

// Save user data
function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  if (users[username]) {
    return res.status(400).json({ error: 'Username already taken' });
  }

  const hashed = bcrypt.hashSync(password, 8);
  users[username] = { password: hashed };
  saveUsers(users);

  res.json({ message: 'Registered successfully' });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const user = users[username];
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token, username });
});

module.exports = router;
