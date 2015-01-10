angular.module('MyApp')
    .factory('Music', function($http, $timeout) {
        service = {};
        service.url = 'http://ws.audioscrobbler.com/2.0/?method=artist.getevents&api_key=2d130fffdbb75b4388638d831bbc990f&format=json&artist=';

        service.getArtist = function(artist) {
            // return $timeout(function(){
            // 	console.log('Added!');
            // },3000);
            return $http.get(
                service.url + artist
            );
        }

        return service;


    })