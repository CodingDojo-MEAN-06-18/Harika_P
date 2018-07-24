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
var MongooseSchema = new mongoose.Schema({
  mongoose_type: {type: String, required:true},
  desc: {type:String, required:true}
}, {timestamps: true});

//store schema:
mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose');

app.get('/', function(req, res) {
  //get all mongooses from database
  Mongoose.find({}, function(err, mongoose_data){
    if (err) { console.log(err); }
    res.render('index',{mongooses : mongoose_data});

  })
})
app.get('/mongooses/new',function(req,res){
  res.render('add');
});

app.get('/mongooses/:id',function(req,res){
  Mongoose.find({ _id: req.params.id }, function(err, response) {
        if (err) { console.log(err); }
        res.render('show', { mongoose: response[0] });
      })

})

app.post('/mongooses',function(req,res){
  var mongooseInstance = new Mongoose({mongoose_type: req.body.type, desc: req.body.desc})
  mongooseInstance.save(function(err){
  if(err) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a tiger!');
            res.redirect('/');
        }
    })
})

app.get('/mongooses/edit/:id',function(req, res){
  Mongoose.find({ _id: req.params.id }, function(err, response) {
        if (err) { console.log(err); }
        res.render('edit', { mongoose: response[0] });
      })
})

//Edit
app.post('/mongooses/:id',function(req,res){
  console.log(req.body.type);
console.log(req.body.desc);
  Mongoose.update({_id: req.params.id}, {mongoose_type: req.body.type, desc: req.body.desc}, function(err, response) {
        if (err) { console.log(err); }
        res.redirect('/');
      });

});

app.post('/mongooses/destroy/:id', function(req, res){
    Mongoose.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });

app.listen(8000, function() {
    console.log("listening on port 8000");
})
