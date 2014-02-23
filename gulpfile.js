var gulp = require('gulp');

// Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jsdoc = require("gulp-jsdoc");

// Lint Task
gulp.task('lint', function() {
    return gulp.src('dispatch.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Docs Task
gulp.task('docs', function() {
  gulp.src("dispatch.js")
    .pipe(jsdoc('./docs'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('dispatch.js')
        .pipe(concat('dispatch.js'))
        .pipe(gulp.dest('src'))
        .pipe(rename('dispatch.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src'));
});

// Run Mocha Phantom Test
gulp.task('test', function(){
  var exec = require('child_process').exec,
    child;

  child = exec('mocha-phantomjs test/index.html',
    function (error, stdout, stderr) {
      if (error !== null) {
        console.log('stdout: ' + stdout);
      }
  });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dispatch.js', ['lint', 'docs', 'scripts','test']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'docs', 'test', 'watch']);