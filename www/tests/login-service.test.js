/* jshint expr:true */
/* globals describe, it, inject, beforeEach, module, expect */

'use strict';

describe('login service:', function() {

    beforeEach(module('musicMatcher'));

    var login;
    beforeEach(function() {
        inject(function($injector) {
            login = $injector.get('login');
        });
    });

    it('should exist', function() {
        expect(login).to.be.an('object');
        expect(login.authenticate).to.be.a('function');
        expect(Object.keys(login).length).to.equal(1);

    });


});