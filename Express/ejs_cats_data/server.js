var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/cats',function (request,response) {
  response.render('cats');
})
app.get('/bsh',function (request,response) {
  var bsh = {name: "British Short Hair", favorite_food: "fish", age:"3" , sleeping_spots:["under bed", "on owner's bed", "couch"]};
    response.render('details', {details: bsh});
})
app.get('/persian',function (request,response) {
  var persian= {name: "Persian", favorite_food: "mice", age:"2" , sleeping_spots:["kitchen sink", "car", "couch"]};
    response.render('details', {details: persian});
})
app.listen(8000,function(){
  console.log("listening on port 8000");
})
