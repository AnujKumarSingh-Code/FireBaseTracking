// server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
