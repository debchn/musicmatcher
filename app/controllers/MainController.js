angular.module('MyApp')
.controller('MainCtrl',function($scope, Music){
	$scope.name = 'Deborah';

	$scope.addArtist = function(){
		Music.addArtist()
		.then(function(){
			console.log('I can do something here!');
		});
	}
});