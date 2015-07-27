var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jshint  = require("gulp-jshint");
var order   = require("gulp-order");
var gulpif  = require("gulp-if");
var ignore  = require("gulp-ignore");
var exit    = require('gulp-exit');
//var logger  = require('../../util/logger');
var config  = require('../../config').jsVendors;

var isNotVendor = function( file ) {
  if (file.path.indexOf(config.src) !== -1) {
    return false;
  }
  return true;
}

gulp.task("vendor-js", function () {
  gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulpif(isNotVendor, jshint()))
    //.pipe(jshint.reporter())
    .pipe(ignore.exclude(config.includeVendors))
    .pipe(order(config.order))
    .pipe(gulpif(config.excludeVendors, concat("vendors.min.js")))
    .pipe(gulpif(config.excludeVendors, uglify()))
    .pipe(gulp.dest(config.dest))
    .pipe(exit());
});
