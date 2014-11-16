angular.module('MyApp')
.controller('MainCtrl',function($scope, Music){

	$scope.hasLocation = false;

	//what do we need:
	// ask location first
	//add artist form, that adds artist from api
	//when artist added, visually display artist somehow
	//everytime artist is added, make api call to check if they are playing in user's location
	// if they are, visually display this
	// 
	
	$scope.addLocation = function(){
		$scope.hasLocation = true;
		console.log($scope.userLocation);
	};

	$scope.addArtist = function(){
		console.log($scope.artist);
		Music.getArtist($scope.artist).then(function(data){
			console.log(data);
		});
	}

});