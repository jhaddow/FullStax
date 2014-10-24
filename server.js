var express = require('express'),
	bodyParser = require('body-parser'),
	database = require('./server-assets/database'),
	cors = require('cors');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/friends', function(req, res){
	res.status(200).json(database.getFriends());
});

app.post('/friends/new', function(req, res){
	database.addFriend(req.body);
	res.status(200).send(req.body.name + "posted");
})


app.listen(9901, function(){
	console.log('listening on port 9901');
})

