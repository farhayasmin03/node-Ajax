const request = require('request');
const port = 3000;
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (req, res) {
    res.render("index");
});
app.post('/create', function(req, res) {
    var name = req.body.name;
    var age = req.body.age;

    res.json({ name: name,age: age  });
    
});
app.use(express.static(__dirname + '/public'));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
