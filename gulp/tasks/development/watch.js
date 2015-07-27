var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', function() {
  gulp.watch(config.sass,    ['sass']);
  gulp.watch(config.scripts, ['scripts']);
  gulp.watch(config.images,  ['images']);
});