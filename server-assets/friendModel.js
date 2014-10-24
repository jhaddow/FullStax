var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema;

var friend = new Schema({
	name: {type: String, required: true, min: 2},
	age: {type: Number},
	yearMet: {type: Date}
});

module.exports = Mongoose.model('Friend', friend);

