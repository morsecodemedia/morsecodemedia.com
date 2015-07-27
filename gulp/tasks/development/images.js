var gulp           = require('gulp');
var plumber        = require('gulp-plumber');
var jpegrecompress = require('imagemin-jpeg-recompress');
var mozjpeg        = require('imagemin-mozjpeg');
var pngquant       = require('imagemin-pngquant');
var changed        = require('gulp-changed');
var exit           = require('gulp-exit');
var config         = require('../../config').images;

gulp.task("images", function() {
  gulp.src(config.src)
    .pipe(plumber())
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(jpegrecompress({
    	loops: 3,
    	method: "smallfry"
    })())
    .pipe(mozjpeg()())
    .pipe(pngquant({ 
      quality: "65-80",
      speed: 3 
    })())
    .pipe(gulp.dest(config.dest))
    .pipe(exit());
});