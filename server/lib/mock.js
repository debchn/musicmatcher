'use strict';
var mock = module.exports;
var q = require('q');

mock.getTest = function(req) {
    return q.when({
        status: 20,
        data: {
            msg: 'Hello World'
        }
    });
};