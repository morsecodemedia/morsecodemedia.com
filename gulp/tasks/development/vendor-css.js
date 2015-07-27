var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var concat_css = require("gulp-concat-css");
var minify_css = require("gulp-minify-css");
var order      = require("gulp-order");
var gulpif     = require("gulp-if");
var ignore     = require("gulp-ignore");
var exit       = require('gulp-exit');
//var logger     = require('../../util/logger');
var config     = require('../../config').cssVendors;

var scss = function(file) {
	if (file.path.indexOf("sass") !== -1) {
		return true;
	}
	return false;
}

var isNotVendor = function( file ) {
  if (file.path.indexOf(config.src) !== -1) {
    return false;
  }
  return true;
}

var cache = function( file ) {
  if (file.path.indexOf(".sass-cache") !== -1) {
    return true;
  }
}

gulp.task("vendor-css", function (callback) { 
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(ignore.exclude(cache))
    .pipe(gulpif(isNotVendor, scss()))
    .pipe(ignore.exclude(config.includeVendors))
    .pipe(ignore.exclude(scss))
    .pipe(order(config.order))
    .pipe(gulpif(config.excludeVendors, concat_css( "vendors.min.css" )))
    .pipe(minify_css())
    .pipe(gulp.dest(config.dest))
    .pipe(exit());	 
});
