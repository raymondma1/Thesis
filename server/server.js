var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(express.static(__dirname + '/../client'))
//console.log(__dirname + '/../client');


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
  console.log("Applet listening on port " + process.env.PORT);
});

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));
app.listen(8000,function() {
	console.log('Listening on 8000');
});
