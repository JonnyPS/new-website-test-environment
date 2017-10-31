// look in node folder and retrieve gulp package
// Once the package is found, we assign its contents to the variable gulp
var gulp = require('gulp');

// includes sass css preprocessor compiler
var sass = require('gulp-sass');

// includes browsersync
var browserSync = require('browser-sync').create();

// compiles scss files into css and dumps them into the css folder
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// inits browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// 'watches' html, scss and js files, and uses browserSync to reload page when any files are saved
gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
})