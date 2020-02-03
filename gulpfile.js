var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');



gulp.task('hello', done => {
    console.log('Hello World!!')
    done()
   });

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
    .pipe(sass()) //this converts scss to css in stylesheets/main.css
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/stylesheets'))
});


gulp.task('style_min', function () {
    return gulp.src('scss/**/*.scss')
    .pipe(sass()) //this converts scss to css in stylesheets/main.css
    .pipe(minifyCSS())
    .pipe(concat('style_main_min.css'))
    .pipe(gulp.dest('public/stylesheets'))
}); 


// -w
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.series('style_min'));
});