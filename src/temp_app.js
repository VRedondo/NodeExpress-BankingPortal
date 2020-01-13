const fs = require('fs');
const path = require('path');
const app = require('express');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'Index'});
});

app.listen(3000);