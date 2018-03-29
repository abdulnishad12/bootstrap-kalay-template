const gulp = require('gulp'),
      gulpCleanCss = require('gulp-clean-css'),
      gulpSass = require('gulp-sass'),
      gulpMinifyJs = require('gulp-js-minify'),
      gulpRename = require('gulp-rename');

// Compile scss files
gulp.task('compile-scss', () => {
  return gulp.src('./scss/style.scss')
             .pipe(gulpSass({ errLogToConsole: true }))
             .pipe(gulp.dest('css'));
});

// Watch for scss changes
gulp.task('watch-scss', () => {
  gulp.watch('./scss/**/*scss', ['compile-scss']);
});

// Minify css files
gulp.task('minify-css', () => {
  return gulp.src('./css/style.css')
             .pipe(gulpCleanCss({ compatibility: 'ie8' }))
             .pipe(gulpRename('style.min.css'))
             .pipe(gulp.dest('./css'));
});

// Minify js files
gulp.task('minify-js', () => {
  return gulp.src('./js/main.js')
             .pipe(gulpMinifyJs())
             .pipe(gulpRename('main.min.js'))
             .pipe(gulp.dest('./js'));
});
