var app = angular.module("FullStax");

app.controller('myCtrl', function($scope, myService){
	$scope.friends = [];

	$scope.getFriends = function() {
		myService.getFriends()
			.then(function(data){
				$scope.friends = data;
			});
	}

	$scope.addFriend = function(friend){
		myService.addFriend(friend)
			.then(function(){
				$scope.getFriends();
				$scope.friend = {};
			});
	}

	
});