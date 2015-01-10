angular.module('MyApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {




        /*locationProvider is a built in
  	AngularJs service for configuring application
  	linking paths.
  	*/
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/');

        //Routes
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            });



    });