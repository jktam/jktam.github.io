// We have to require our dependencies
var gulp = require('gulp'),
    livereload = require('gulp-livereload');
var $ = require('gulp-load-plugins')();

// create a TASK to compile Pug to HTML using gulp-pug
gulp.task('html', function() {
   gulp.src(['./lib/pug/*.pug'])
   .pipe($.pug({pretty: true, doctype: 'html'}))
   .on('error', $.util.log)
   .pipe(gulp.dest('.'));
});

// create a TASK to compile CoffeeScript to JavaScript using gulp-coffee
gulp.task('js', function() {
   gulp.src(['./lib/coffee/*.coffee'])
   .pipe($.coffee({bare: true}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./js/'));
});

// create a TASK to compile Sass into CSS using gulp-sass
gulp.task('css', function() {
   gulp.src(['./lib/sass/*.scss'])
   .pipe($.sass({style: 'expanded'}))
   .on('error', $.util.log)
   .pipe(gulp.dest('./css/'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./lib/**/*.pug'], ['html']);
   gulp.watch(['./lib/**/*.coffee'], ['js']);
   gulp.watch(['./lib/**/*.scss'], ['css']);
   // Create LiveReload server
   livereload.listen();

   // Watch any files in lib/, reload on change
   gulp.watch(['./*.html']).on('change', livereload.changed);
   gulp.watch(['./lib/**']).on('change', livereload.changed);
});

// finally, create a TASK that will run all commands when typing "gulp"
// in Terminal

gulp.task('default', ['html', 'js', 'css', 'watch'], function() {});