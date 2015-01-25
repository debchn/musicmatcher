'use strict';
angular.module('musicMatcher', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        //Routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl as homeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl as loginCtrl'
            });
    })
    .value('API_ROOT', 'http://localhost:8080/api/');