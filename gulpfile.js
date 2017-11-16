// look in node folder and retrieve gulp package
// Once the package is found, we assign its contents to the variable gulp
var gulp = require('gulp');

// includes sass css preprocessor compiler
var sass = require('gulp-sass');

// includes browsersync
var browserSync = require('browser-sync').create();

// allows babel to compile es6 code into es5
const babel = require('gulp-babel');
 
gulp.task('compile-js', () => {
    console.log('babel task')
    gulp.src('app/es6/script.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('app/js'))
});

// compiles scss files into css and dumps them into the css folder
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
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
  // compile scss and es6
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/es6/**/*.js', ['compile-js']); 
  // reload browser
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/css/**/*.css').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
})



