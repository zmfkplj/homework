/**
 * Created by Administrator on 2017/5/10.
 */
var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', function () {
    return gulp.src('./src/main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./build'));
});