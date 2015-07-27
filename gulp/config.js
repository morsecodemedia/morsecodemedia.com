
var srcAssets         = '../dev';
var developmentAssets = '../public';
var productionAssets  = '../public';

module.exports = {
  sass: {
    src:  srcAssets + '/css/scss/**/*.{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: srcAssets + '/css/scss'
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  scripts: {
    src: srcAssets + '/js/**/*',
    dest: developmentAssets + '/js'
  },
  cssVendors: {
    src: srcAssets + '/css/vendors/**/*',
    dest: developmentAssets + '/css/vendors',
    include:[
      'foundation.min.css',
      'normalize.css',
      'animate.min.css'
    ],
    exclude: [
      'foundation.css',
      'animate.css',
      'ie.css'
    ],
    order: [
      srcAssets + '/css/vendors/foundation/normailize.css',
			srcAssets + '/css/vendors/foundation/*',
			srcAssets + '/css/vendors/*'
    ],
    includeVendors: function(file) {
      if (file.path.indexOf(srcAssets + '/css/vendors') !== -1) {
        for (var i in cssVendors.include) {
          if (file.path.indexOf(cssVendors.include[i]) !== -1) {
            return false;
          }
        }
        return true;
      }
      return false;
    },
    excludeVendors: function(file) {
      for (var i in cssVendors.exclude) {
        if (file.path.indexOf(cssVendors.exclude[i]) !== -1) {
          return false;
        }
      }
      return true;
    }
  },
  jsVendors: {
    src: srcAssets + '/js/vendors/**/*',
    include: [
      'jquery.js',
      'jquery.cookie.js',
      'fastclick.js',
      'placeholder.js',
      'modernizr.js',
      'foundation.min.js'
    ],
    exclude: [
    ],
    order: [
      srcAssets + "/js/vendors/jquery.js",
			srcAssets + "/js/vendors/foundation/foundation.min.js",
			srcAssets + "/js/vendors/*"
    ],
    includeVendors: function() {
      if (file.path.indexOf(config.src) !== -1) {
    		for (var i in jsVendors.include) {
    			if (file.path.indexOf(jsVendors.include[i]) !== -1) {
    				return false;
    			}
    		}
    		return true;
    	}
    	return false;
    },
    excludeVendors: function() {
      for(var i in jsVendors.exclude) {
    		if(file.path.indexOf(jsVendors.exclude[i]) !== -1) {
    			return false;
    		}
    	}
    	return true;
    }
  },
  images: {
    src: srcAssets + '/js/**/*',
    dest: developmentAssets + '/images/**'
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: developmentAssets,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  watch: {
    sass:    srcAssets + '/css/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/js/**/*.js',
    images:  srcAssets + '/images/**/*'
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    }
  }
};
