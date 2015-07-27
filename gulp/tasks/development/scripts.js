var gulp   = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var exit   = require('gulp-exit');
var config = require('../../config').scripts;

gulp.task('scripts', function(callback) {
	gulp.src(config.src)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(concat("scripts.min.js"))
		.pipe(gulp.dest(config.dest))
		.pipe(exit());
});