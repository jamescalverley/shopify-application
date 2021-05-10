const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

const handleAPI = require('./routes/apiRoute')

app.use('/api/', handleAPI );

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log("App running on port ->", PORT)
});

