var app = angular.module("FullStax");

app.service('myService', function($http, $q){
	this.getFriends = function(){
		var deferred = $q.defer();
		$http.get('http://localhost:9901/friends')
			.then(function(response){
				deferred.resolve(response.data);
			});

		return deferred.promise;
	}

	this.addFriend = function(friend){
		return $http.post('http://localhost:9901/friends/new', friend);
	}
})