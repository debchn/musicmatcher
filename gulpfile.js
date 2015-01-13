'use strict';
/* global require, console */

var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var colors = require('colors');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var prettify = require('gulp-html-prettify');
var beautify = require('gulp-js-beautify');

var appFiles = ['*.js', 'client/app/**/*.js', 'server/**/*.js', 'client/app/**/*.html'];
var htmlFiles = 'client/app/**/*.html';
var jsFiles = ['*.js', 'server/**/*.js', 'client/app/**/*.js'];

gulp.task('default', [], function() {
    console.log('***********************'.yellow);
    console.log('  gulp dev: run angular app on localhost'.yellow);
    console.log('  gulp prettify: format all html code'.yellow);
    console.log('***********************'.yellow);
    return true;
});


gulp.task('devServer', function() {
    connect.server({
        root: 'client',
        port: 3000,
        livereload: true
    });
});


gulp.task('lint', function() {
    return runSequence('jshint', 'beautify', 'prettify');
});


gulp.task('beautify', function() {
    gulp.src(jsFiles, {
            base: '.'
        }).pipe(beautify('.jsbeautifyrc'))
        .pipe(gulp.dest('.'));
});

gulp.task('prettify', function() {

    gulp.src(htmlFiles, {
            base: '.'
        })
        .pipe(prettify('.jsprettifyrc'))
        .pipe(gulp.dest('.'));
});


gulp.task('jshint', function() {
    gulp.src(jsFiles)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});


gulp.task('lint-watch', function() {
    gulp.watch(jsFiles, ['jshint']);
});

gulp.task('watch', function() {
    watch(appFiles).pipe(connect.reload());

});


gulp.task('dev', function(cb) {
    runSequence('lint', 'devServer', 'watch', cb);
});