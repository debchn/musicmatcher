/* jshint expr:true */
/* globals describe, it, inject, beforeEach, module, expect, Object */

'use strict';

describe('user service:', function() {

    beforeEach(module('musicMatcher'));

    var user;
    beforeEach(function() {
        inject(function($injector) {
            user = $injector.get('user');
        });
    });

    it('should exist', function() {
        expect(user).to.be.an('object');
        expect(user.addArtist).to.be.a('function');
        expect(user.getList).to.be.a('function');
        expect(user.update).to.be.a('function');
        expect(user.updateList).to.be.a('function');
        expect(user.artistHead).to.be.a('function');
        expect(user.nextArtist).to.be.a('function');

        expect(Object.keys(user).length).to.equal(7);
    });

    it('should getArtist',function(){

    });


});