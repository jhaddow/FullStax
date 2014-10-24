var FriendModel = require('./friendModel'),
	Promise = require('bluebird');
	Promise.promisifyAll(FriendModel);
	Promise.promisifyAll(FriendModel.prototype);

module.exports = {
	getFriends: function(req, res) {
		FriendModel.find().exec().then(function(friends){
			res.status(200).json(friends);
		}, function(err){
			res.status(200).json(err);
		});
	},

	addFriend: function(req, res) {
		new FriendModel(req.body).saveAsync()
			.then(function(friends){
				res.status(200).json(friends[0]);
			}).catch(function(err){
				res.status(500).json(err);
			});
	}
}