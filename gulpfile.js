/*
var gulp = require('gulp');
var requireDir = require('require-dir');
// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
*/

// INCLUDE GULP
var gulp = require("gulp");

// INCLUDE MISC PACKAGES
var concat = require("gulp-concat"); 
var del = require("del");
var exit       = require('gulp-exit');
var gulpif = require("gulp-if");
var ignore = require("gulp-ignore");
var order = require("gulp-order");
var plumber = require("gulp-plumber");
var runSequence = require('run-sequence');
var size   = require('gulp-size'); 
var uglify = require("gulp-uglify"); 
var util = require("gulp-util");
var watch = require("gulp-watch");

// INCLUDE CSS PACKAGES
var autoprefixer = require('gulp-autoprefixer');
var concat_css = require("gulp-concat-css"); 
var minify_css = require("gulp-minify-css");
var sass = require("gulp-sass");

// INCLUDE JS PACKAGES
var jshint = require("gulp-jshint"); 

// IMAGE COMPRESSION PLUGINS
var jpegrecompress = require("imagemin-jpeg-recompress");
var mozjpeg = require("imagemin-mozjpeg");
var pngquant = require("imagemin-pngquant");

var include_vendor_css = [ "foundation.min.css" ];
var do_not_concat_css = [ "foundation.css" ];
var include_vendor_js = [   
	"jquery.js",
	"jquery.cookie.js",
	"fastclick.js",
	"placeholder.js",  
	"modernizr.js",
	"foundation.min.js"
	 ];
var do_not_concat_js = [  ];

// SOME CONDITIONALS FOR LOGIC BELOW

var onlySelectVendorCSS = function( file ) {
    if( file.path.indexOf("/vendor") !== -1 ) {
        for( var vindex in include_vendor_css ) {
            if( file.path.indexOf( include_vendor_css[vindex] ) !== -1 ) {
                return false;
            }
        }
        return true;
    }
    return false;
};

var onlyDoNotConcatCSS = function( file ) {
	for( var dindex in do_not_concat_css ) {
		if( file.path.indexOf( do_not_concat_css[dindex] ) !== -1 ) {
			return false;
		}
	}
	return true;
};

var onlySelectVendorJS = function( file ) {
	if( file.path.indexOf("/vendor") !== -1 ) {
		for( var vindex in include_vendor_js ) {
			if( file.path.indexOf( include_vendor_js[vindex] ) !== -1 ) {
				return false;
			}
		}
		return true;
	}
	return false;
};

var onlyDoNotConcatJS = function( file ) {
	for( var dindex in do_not_concat_js ) {
		if( file.path.indexOf( do_not_concat_js[dindex] ) !== -1 ) {
			return false;
		}
	}
	return true;
};

var isNotVendor = function( file ) {
	if( file.path.indexOf("/vendor") !== -1 )  {
		return false;
	}
	return true;
}

var notImgOrVideo = function( file ) {
	if( file.path.indexOf("/img") === -1 && file.path.indexOf("/video") === -1) {
		return true;
	}
	return false;
}

var scss = function( file ) {
	if( file.path.indexOf("sass") !== -1) {
		return true;
	}
	return false;
}

var cache = function( file ) {
	if( file.path.indexOf(".sass-cache") !== -1 ) {
		return true;
	}
}

var test = function( file ) {
	console.log(file.path);
	return true;
}

// PROCESS VENDOR CSS
gulp.task ( "vendorCSS", function (cb) { 
	console.log("Running vendorCSS task...");
	gulp.src ( "./dev/css/vendors/**/*" )
    .pipe ( plumber ( ) )
		.pipe ( ignore.exclude ( cache ) )
		.pipe ( gulpif ( isNotVendor, sass () ) )
		.pipe ( ignore.exclude ( onlySelectVendorCSS ) )
		//.pipe ( ignore.exclude ( scss ) )
		.pipe ( order( [
			"dev/css/vendors/foundation/normailize.css",
			"dev/css/vendors/foundation/*",
			"dev/css/vendors/*"
		]))
		.pipe ( gulpif ( onlyDoNotConcatCSS, concat_css ( "vendors.min.css" ) ) )
		.pipe ( minify_css () )
		.pipe ( gulp.dest ( "./public/css/") )
	del(["./dev/**/*.map", "./public/**/*.map"], cb);
	gulp.src ( "./dev/css/vendor/webfonts/*")
		.pipe ( gulp.dest ( "./public/css/vendor/webfonts/") );
});

// PROCESS CUSTOM CSSS
gulp.task( "customCSS", function(callback) {
	console.log("Running customCSS task...");
	gulp.src( "./dev/css/scss/**/*" )
		.pipe( plumber() )
		.pipe( ignore.exclude( cache ) )
		.pipe( sass() )
		.pipe(autoprefixer([
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ]))
		.pipe( concat_css( "styles.min.css" ) )
		//.pipe( minify_css() )
		.pipe( gulp.dest( "./public/css/" ) )
	del(["./dev/**/*.map", "./public/**/*.map"], callback);
});

// PROCESS VENDOR JS
gulp.task ( "vendorJS", function () {
	console.log("Running vendorJS task...");
	gulp.src ( "./dev/js/vendors/**/*" )
    	.pipe ( plumber ( ) )
		.pipe ( gulpif ( isNotVendor, jshint () ) )
  		.pipe ( jshint.reporter ( 'default' ) )
		.pipe ( ignore.exclude ( onlySelectVendorJS ) )
		.pipe ( order( [
				"**/jquery.js",
				"**/foundation.min.js",
				"dev/js/vendors/*"
			]))
		.pipe ( gulpif ( onlyDoNotConcatJS, concat ( "vendors.min.js" ) ) )
		.pipe ( gulpif ( onlyDoNotConcatJS, uglify () ) )
		.pipe ( gulp.dest ( "./public/js/") )
});

// PROCESS CUSTOM JS
gulp.task( "customJS", function(callback) {
	console.log("Running customJS task...");
	gulp.src( "./dev/js/*" )
		.pipe( plumber() )
		.pipe( jshint() )
		.pipe( concat( "scripts.min.js" ) )
		//.pipe( uglify() )
		.pipe( gulp.dest( "./public/js/" ) )
});

// MOVE IMAGES AND VIDEO
gulp.task ( "move", function() {
	gulp.src ( "./dev/video/*")
		.pipe ( plumber ( ) )
		.pipe ( ignore.exclude ( notImgOrVideo ) )
		.pipe ( gulp.dest ( "./public/video" ) )
});

// COMPRESS IMAGES
gulp.task ( "imgcompress", function() {
	console.log("Running Image Compression Task...");
	gulp.src ( "./dev/img/**/" )
		.pipe ( plumber() )
/*
		.pipe ( jpegrecompress({
			loops: 3,
			method: "smallfry"
		})() )
*/
		.pipe ( mozjpeg()() )
		.pipe ( pngquant( { quality: "65-80", speed: 3 } )( ) )
		.pipe ( gulp.dest( "./public/img" ) )
});

// WATCH ALL
gulp.task( "watch", function() {
	var vendorCSS = [ "vendorCSS" ];
	var customCSS = [ "customCSS" ];
	var vendorJS = [ "vendorJS" ];
	var customJS = [ "customJS" ];
	var imgCompress = [ "imgcompress" ];

	//gulp.watch( "./dev/css/vendors/**/*", vendorCSS );
	gulp.watch( "./dev/css/scss/**/*", customCSS );
	//gulp.watch( "./dev/js/vendors/**/*", vendorJS );
	gulp.watch( "./dev/js/**/*", customJS );
	//gulp.watch( "./dev/img/**/*", imgCompress );
});

gulp.task('build', function(callback) {
  runSequence(
  [
    'customCSS',
    'vendorCSS',
/*     'optimize:css', */
    'customJS',
    'vendorJS',
/*     'optimize:js', */
    'imgcompress'
  ],
/*   'base64', */
  callback);
});

gulp.task('default', ['watch'] );
