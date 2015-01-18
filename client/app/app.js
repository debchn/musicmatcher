'use strict';
angular.module('musicMatcher', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        //Routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl as homeCtrl'
            });
    })
    .value('API_ROOT', 'http://localhost:8080/api/');