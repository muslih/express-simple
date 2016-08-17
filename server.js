var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.all('/*', function(req, res, next){
//            res.header("Access-Control-Allow-Origin", "*");
//            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
//            res.header("Access-Control-Allow-Methods", "POST, GET");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
  { 
    "id": "1q2w3e",
    "text":"Eggs"
  },
  {
    "id":"4rf5tg",
    "text":"Milk"
  },
  {
    "id": "7uj8ik",
    "text":"Bacon"
  },
  {
    "id": "1az2sx",
    "text": "Frog Legs"
  }
]
app.get('/ingredients',function(req, res){
  console.log("GET data dari SERVER");
  res.send(ingredients);
});

app.post('/ingredients', function(req,res){
  var ingredient = req.body
  console.log(req.body);
  ingredients.push(ingredient);
  res.status(200).send("Berhasil POST data ingredient");
});

app.listen(6060,function(){
  console.log('Server jalan di port 6060 men!');
});
