'use strict';

angular.module('musicMatcher.services',[])
    .factory('login', function($http, API_ROOT) {
        var service = {};

        service.authenticate = function() {
            return $http.post(API_ROOT + 'login');
        };
        return service;
    });