'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer')
var imagemin = require('gulp-imagemin');

gulp.task('default', ['sass:watch',  'minimg'])

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({
      browsers: ['last 9 versions']
    })]))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('minimg', function () {
  return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img'))
});
