// look in node folder and retrieve gulp package
// Once the package is found, we assign its contents to the variable gulp
var gulp = require('gulp');

// installs sass css preprocessor compiler
var sass = require('gulp-sass');


gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})
