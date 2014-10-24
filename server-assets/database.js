var friends = [
	{
		name: 'Jess',
		age: 65,
		yearMet: 2014
	},
	{
		name: 'Brycen',
		age: 26,
		yearMet: 2006
	},
	{
		name: 'Schuyler',
		age: 25,
		yearMet: 1989
	}
];

module.exports.getFriends = function() {
	return friends;
}

module.exports.addFriend = function(friendObj){
	friends.push(friendObj);
}