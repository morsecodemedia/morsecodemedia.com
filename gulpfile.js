// Include Gulp
var gulp = require("gulp");

// Misc Gulp Plugins
var del = require("del");
var exit = require('gulp-exit');
var gulpif = require("gulp-if");
var ignore = require("gulp-ignore");
var order = require("gulp-order");
var plumber = require("gulp-plumber"); 
var util = require("gulp-util"); 
var watch = require("gulp-watch");

// CSS Plugins
var autoprefixer = require('gulp-autoprefixer');
var concat_css = require("gulp-concat-css");
var csslint = require('gulp-csslint');
var minify_css = require("gulp-minify-css");
var sass = require("gulp-sass");

// Javascript Plugins
var concat = require("gulp-concat");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");

// Image Compression Plugins
var jpegrecompress = require("imagemin-jpeg-recompress");
var mozjpeg = require("imagemin-mozjpeg");
var pngquant = require("imagemin-pngquant");

// Inclusion Arrays
var includeVendorCSS = [ "foundation.min.css", "normalize.css", "animate.min.css" ];
var includeVendorJS = [ "jquery.js", "jquery.cookie.js", "fastclick.js", "placeholder.js", "modernizr.js", "foundation.min.js" ];

// Exclusion Arrays
var doNotConcatCSS = [ "foundation.css", "animate.css", "ie.css" ];
var doNotConcatJS = [ ];

// Conditional Logic for CSS
var onlySelectVendorCSS = function( file ) {
    if ( file.path.indexOf("/vendors") !== -1 ) {
        for ( var vindex in includeVendorCSS ) {
            if ( file.path.indexOf( includeVendorCSS[vindex] ) !== -1 ) {
                return false;
            }
        }
        return true;
    }
    return false;
};

var onlyDoNotConcatCSS = function( file ) {
    for ( var dindex in doNotConcatCSS ) {
        if ( file.path.indexOf( doNotConcatCSS[dindex] ) !== -1 ) {
            return false;
        }
    }
    return true;
};

var scss = function( file ) {
	if ( file.path.indexOf("sass") !== -1) {
		return true;
	}
	return false;
}

var cache = function( file ) {
	if ( file.path.indexOf(".sass-cache") !== -1 ) {
		return true;
	}
}

// Conditional Logic for Javascript
var onlySelectVendorJS = function( file ) {
	if ( file.path.indexOf("/vendors") !== -1 ) {
		for ( var vindex in includeVendorJS ) {
			if ( file.path.indexOf( includeVendorJS[vindex] ) !== -1 ) {
				return false;
			}
		}
		return true;
	}
	return false;
};

var onlyDoNotConcatJS = function( file ) {
	for( var dindex in doNotConcatJS ) {
		if( file.path.indexOf( doNotConcatJS[dindex] ) !== -1 ) {
			return false;
		}
	}
	return true;
};

// Are Nots
var isNotVendor = function( file ) {
	if ( file.path.indexOf("/vendors") !== -1 ) {
		return false;
	}
	return true;
}

var notImgOrVideo = function( file ) {
	if ( file.path.indexOf("/img") === -1 && file.path.indexOf("/video") === -1 ) {
		return true;
	}
	return false;
}

// Custom CSS Reporter
var customReporter = function(file) {
    util.log(util.colors.cyan(file.csslint.errorCount)+' errors in '+util.colors.magenta(file.path));
    
    file.csslint.results.forEach(function(result) {
        util.log(result.error.message+' on line '+result.error.line);
    });
};

// Process Custom CSS
gulp.task( "customCSS", function(callback) {
    console.log("Running customCSS task...");
    
    gulp.src( "./dev/css/scss/**/*" )
        .pipe( plumber() )
        .pipe( ignore.exclude( cache ) )
        .pipe( sass() )
        .pipe( concat_css( "styles.min.css" ) )
        .pipe( autoprefixer({
        	browsers: ["last 2 versions"],
        	cascade: false
        }))
        .pipe( csslint() )
        .pipe( csslint.reporter(customCSSReporter) )
        //.pipe( minify_css() )
        .pipe( gulp.dest( "./public/css/" ) )
    del(["./dev/**/*.map", "./public/**/*.map"], callback)
        .pipe( exit() );
});

// Process Vendor CSS
gulp.task( "vendorCSS", function (callback) { 
	console.log("Running vendorCSS task...");
	
	gulp.src( "./dev/css/vendors/**/*" )
        .pipe( plumber() )
		.pipe( ignore.exclude( cache ) )
		.pipe( gulpif( isNotVendor, sass() ) )
		.pipe( ignore.exclude( onlySelectVendorCSS ) )
		.pipe( ignore.exclude( scss ) )
		.pipe( order( [
			"dev/css/vendors/foundation/normailize.css",
			"dev/css/vendors/foundation/*",
			"dev/css/vendors/*"
		]))
		.pipe( gulpif( onlyDoNotConcatCSS, concat_css( "vendors.min.css" ) ) )
		.pipe( minify_css() )
		.pipe( gulp.dest( "./public/css/") )
	del(["./dev/**/*.map", "./public/**/*.map"], callback)
	    .pipe( exit() );
});

// Process Custom Javascript
gulp.task( "customJS", function(callback) {
	console.log("Running customJS task...");
	
	gulp.src( "./dev/js/*" )
		.pipe( plumber() )
		.pipe( jshint() )
		.pipe( concat( "scripts.min.js" ) )
		//.pipe( uglify() )
		.pipe( gulp.dest( "./public/js/" ) )
		.pipe( exit() );
});

// Process Vendor Javascript
gulp.task( "vendorJS", function () {
	console.log("Running vendorJS task...");
	
	gulp.src( "./dev/js/vendors/**/*" )
    	.pipe( plumber() )
		.pipe( gulpif( isNotVendor, jshint() ) )
  		.pipe( jshint.reporter( 'default' ) )
		.pipe( ignore.exclude( onlySelectVendorJS ) )
		.pipe( order( [
				"**/jquery.js",
				"**/foundation.min.js",
				"dev/js/vendors/*"
			]))
		.pipe( gulpif( onlyDoNotConcatJS, concat( "vendors.min.js" ) ) )
		.pipe( gulpif( onlyDoNotConcatJS, uglify() ) )
		.pipe( gulp.dest( "./public/js/") )
		.pipe( exit() );
});

// Move Web Fonts
gulp.task( "webfonts", function(callback) {
    console.log("Running webfonts task...");
    
   	gulp.src( "./dev/css/vendor/webfonts/*" )
		.pipe( gulp.dest( "./public/css/vendor/webfonts/" ) ) 
		.pipe( exit() ); 
});

// Move Images and Videos
gulp.task( "move", function() {
	gulp.src( "./dev/video/*")
		.pipe( plumber () )
		.pipe( ignore.exclude( notImgOrVideo ) )
		.pipe( gulp.dest( "./public/video" ) )
		.pipe( exit() );
});

// Compress Images
gulp.task( "imgcompress", function() {
	console.log("Running Image Compression Task...");

	gulp.src( "./dev/img/**/" )
		.pipe ( plumber() )
		.pipe ( jpegrecompress({
			loops: 3,
			method: "smallfry"
		})() )
		.pipe( mozjpeg()() )
		.pipe( pngquant( { quality: "65-80", speed: 3 } )( ) )
		.pipe( gulp.dest( "./public/img" ) )
		.pipe( exit() );
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

gulp.task('default', ['watch'] );