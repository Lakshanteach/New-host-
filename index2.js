const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('login'));
app.get('/qr', (req, res) => res.render('qr'));
app.get('/qr-image', (req, res) => {
  res.redirect('https://via.placeholder.com/300'); // TODO: Replace with real QR
});

app.listen(3000, () => console.log("🟢 Panel on http://localhost:3000"));
