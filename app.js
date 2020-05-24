var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// locate stylesheets etc
app.use(express.static(__dirname + '/public')); // dirname portable in case of new version

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.listen(process.env.PORT || 3000, process.env.IP);
