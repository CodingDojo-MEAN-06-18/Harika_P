var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
//create mongoose schema:
var UserQuoteSchema = new mongoose.Schema({
  name:  { type: String, required: true, minlength: 6},
  quote: { type: String, required: true},
}, {timestamps: true });

//store schema:

mongoose.model('UserQuote', UserQuoteSchema);
var UserQuote = mongoose.model('UserQuote');

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/quotes', function (req, res){
  UserQuote.create(req.body, function(err) {
      if (err) { console.log(err); }
      res.redirect('/quotes');
    })


})
app.get('/quotes',function(req,res){
  UserQuote.find({}, function(err, quotes) {
   if (err) { console.log(err); }
   res.render('quotes', { quotes: quotes });

    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
