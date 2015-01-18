'use strict';
var mock = module.exports;
var q = require('q');

mock.getTest = function(req) {
    return q.when({
        status: 200,
        data: {
            msg: 'Hello World'
        }
    });
};

mock.getArtistsForGenre = function(req) {
    return q.when({
        status: 200,
        data: {
            artists: [{
                id: 1,
                name: 'Pink Floyd',
                img: 'http://i.imgur.com/EOBDqov.png'
            }, {
                id: 2,
                name: 'Michael Jackson',
                img: 'http://i.imgur.com/856Dntl.jpg'
            }]
        }
    });
};