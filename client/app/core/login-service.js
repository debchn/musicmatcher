angular.module('musicMatcher')
    .factory('login', function($http, API_ROOT) {
        var service = {};

        service.authenticate = function() {
            return $http.post(API_ROOT + 'login');
        };
        return service;
    })