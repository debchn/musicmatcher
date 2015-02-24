'use strict';

//Trying to use a functional programming approach
angular.module('musicMatcher')
    .factory('user', function(API_ROOT, $http) {
        var service = {};
        var list = [];

        //HTTP Request
        service.getArtists = function(genre) {
            return $http.get(API_ROOT + 'genre')
                .then(function(data) {
                    service.updateList(data.data.artists);
                    return service.artistHead(service.getList());
                });

        };

        service.addArtist = function() {
            //TODO: do add Artist to user preferences
            return service.nextArtist(service.getList());
        };

        //Retrieves list
        service.getList = function() {
            return list;
        };

        service.update = function(variable, value) {
            variable = value;

        }

        //update list
        service.updateList = function(updatedList) {
            update(list, updatedList);
            return list;
        };

        service.artistHead = function(list) {
            return R.head(list);
        };


        service.nextArtist = function(list) {
            return service.artistHead(service.updateList(R.tail(list)));
        };

        return service;
    });