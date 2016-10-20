// We have to require our dependencies
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// create a TASK to compile Pug to HTML using gulp-pug
gulp.task('html', function() {
   gulp.src(['./lib/pug/index.pug'])
   .pipe($.pug({pretty: true, doctype: 'html'}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./public/'));
});

// create a TASK to compile CoffeeScript to JavaScript using gulp-coffee
gulp.task('js', function() {
   gulp.src(['./lib/coffee/main.coffee'])
   .pipe($.coffee({bare: true}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./public/'));
});

// create a TASK to compile Sass into CSS using gulp-sass
gulp.task('css', function() {
   gulp.src(['./lib/sass/main.scss'])
   .pipe($.sass({style: 'expanded'}))
   .pipe(gulp.dest('./public/'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./lib/pug/index.pug'], ['html']);
   gulp.watch(['./lib/coffee/script.coffee'], ['js']);
   gulp.watch(['./lib/sass/style.scss'], ['css']);
});

// finally, create a TASK that will run all commands when typing "gulp"
// in Terminal

gulp.task('default', ['html', 'js', 'css', 'watch'], function() {});