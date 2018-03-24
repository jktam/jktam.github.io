var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var coffee = require('gulp-coffee');
var browserSync = require('browser-sync');

gulp.task('minify', function() {
  gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});

gulp.task('processCSS', function() {
  gulp.src('./css/*.css')
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
  return gulp.src('./lib/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('coffee', function() {
   gulp.src(['./lib/coffee/*.coffee'])
   .pipe(coffee({bare: true}))
   .pipe(gulp.dest('./js/'));
});

gulp.task('pug', function() {
   gulp.src(['./lib/pug/*.pug'])
   .pipe(pug({pretty: true, doctype: 'html'}))
   .pipe(gulp.dest('.'));
});

gulp.task('default', ['serve']);

gulp.task('watch', function() {
  gulp.watch('css/*.css', ['processCSS']);
  gulp.watch('js/*.js', ['minify']);
});

gulp.task('serve', ['processCSS','minify','sass','coffee','pug'], function() {
  browserSync.init({
    server: '.',
    port: 3000
  });
  gulp.watch('./lib/sass/*.scss', ['sass']);
  gulp.watch('css/*.css', ['processCSS']).on('change', browserSync.reload);
  gulp.watch(['./lib/coffee/*.coffee'], ['coffee']);
  gulp.watch('js/*.js', ['minify']).on('change', browserSync.reload);
  gulp.watch(['./lib/pug/*.pug'], ['pug']);
  gulp.watch('*.html').on('change', browserSync.reload);
});