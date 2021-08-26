var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.get('/api/v1/', (req, res) => {
  res.json({
    message: 'Welcome to code world',
  });
});

app.listen(port);
console.log('listening on port' + port);
