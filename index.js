const express = require('express');

const app = express();

console.log(__dirname)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', {options: {'Feature-Policy': "fullscreen 'self'"}})
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css')
});

app.get('/goose.jpg', (req, res) => {
  res.sendFile(__dirname + '/goose.jpeg')
});

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/script.js')
});

app.listen(3000, () => {
  console.log('server started');
});
