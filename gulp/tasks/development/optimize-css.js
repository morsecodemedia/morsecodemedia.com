var gulp      = require('gulp');
var minifycss = require('gulp-minify-css');
var csslint   = require('gulp-csslint');
var size      = require('gulp-size');
var logger    = require('../../util/logger');
var config    = require('../../config').optimize.css;

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(csslint())
    .pipe(csslint.reporter(logger))
    .pipe(minifycss(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});