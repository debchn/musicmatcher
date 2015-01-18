'use strict';

angular.module('musicMatcher')
    .controller('HomeCtrl', function(user) {
        var homeCtrl = this;
        homeCtrl.user = user;

        homeCtrl.getArtists = function() {
            user.getArtists(homeCtrl.genre).then(function(resp) {
                var artist = resp;
                homeCtrl.artist = {
                  name: artist.name,
                  img: artist.img
                 };
            });

        };

        homeCtrl.addArtist = function(){
          homeCtrl.artist = user.addArtist();
        };

        homeCtrl.nextArtist = function() {
            homeCtrl.artist = user.nextArtist(user.getList());
        };

    });