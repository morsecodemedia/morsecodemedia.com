var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var concat_css   = require("gulp-concat-css");
var minify_css   = require("gulp-minify-css");
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config').sass;

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = config.options;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

/*   browsersync.notify('Compiling Sass'); */

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(sourcemaps.init())
      .pipe(concat_css( "styles.min.css" ))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.dest));
});