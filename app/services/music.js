angular.module('MyApp')
.factory('Music', function($http, $timeout ){
	service  = {};

	service.addArtist = function(){
		return $timeout(function(){
			console.log('Added!');
		},3000);
	}

	return service;


})