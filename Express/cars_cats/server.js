var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
console.log(__dirname);

app.get('/',function (request, response) {
  response.sendFile('index.html');
})
app.get('/cars',function (request, response) {
  response.sendFile(__dirname + '/static' + '/cars.html');
})
app.get('/cats',function (request, response) {
  response.sendFile(__dirname + '/static' + '/cats.html');
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
