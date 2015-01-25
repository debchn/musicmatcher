'use strict';

angular.module('musicMatcher')
    .controller('LoginCtrl', function(user, login, $state) {
        var loginCtrl = this;

        loginCtrl.login = function() {
            login.authenticate()
                .then(function() {
                    $state.go('home');
                });
        };
    });