var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/data', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/sample_data.json'));
});

app.use(express.static('client/build'));


var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});