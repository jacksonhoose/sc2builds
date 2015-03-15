var gulp = require('gulp');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

var paths = {
  src: {
    bower: './client/bower_componenets',
    js: './client/js',
    stylus: './client/stylus',
    views: './client/views/'
  },
  dist: {
    css: './public/css',
    js: './public/js'
  }
};

var handleError = function(err) {
  console.log(err.toString());
  this.emit('end');
};

gulp.task('browserify', function(){
  return gulp.src(paths.src.js + '/router.js')
    .pipe(browserify({
      debug: false, // disable source maps
      transform: ['reactify'],
    }))
    .on('error', handleError)
    .pipe(rename('app.bundled.js'))
    .pipe(gulp.dest(paths.dist.js))
});

gulp.task('stylus', function(){
  return gulp.src(paths.src.stylus + '/app.styl')
    .pipe(stylus())
    .on('error', handleError)
    .pipe(gulp.dest(paths.dist.css));
});

gulp.task('css', function(){
  
});

gulp.task('watch', function(){
  gulp.watch(paths.src.stylus + '/**/*', ['stylus']);
  gulp.watch(paths.src.js + '/**/*', ['browserify']);
});

gulp.task('default', ['browserify', 'stylus', 'watch']);