var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);
app.get('/', function(request, response) {
  console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");

})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
