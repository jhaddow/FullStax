var express = require('express'),
	bodyParser = require('body-parser'),
	//database = require('./server-assets/database'),
	cors = require('cors'),
	mongoose = require('mongoose'),

	friendCtrl = require('./server-assets/friendCtrl');

//Mongoose connection
var mongoUri = 'mongodb://localhost/theFullStack';
connection = mongoose.connection;
mongoose.connect(mongoUri);
connection.once('open', function(){
	console.log("Connect to mongoDB at " + mongoUri);
})

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/friends', friendCtrl.getFriends);

app.post('/friends/new', friendCtrl.addFriend);


app.listen(9901, function(){
	console.log('listening on port 9901');
})

