'use strict';

angular.module('musicMatcher.controllers')
    .controller('LoginCtrl', function(user, login, $state) {
        var loginCtrl = this;

        loginCtrl.login = function() {
            login.authenticate()
                .then(function() {
                    $state.go('home');
                });
        };
    });