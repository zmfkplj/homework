/**
 * Created by Administrator on 2017/5/9.
 */
var gulp = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');
var less = require('gulp-less');
var sass = require('gulp-sass');

gulp.task('less',function () {
    return gulp.src('./src/css1.less')
        .pipe(less())
        .pipe(gulp.dest('./dest'));
});

// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');

// var paths = {
//     scripts:['js/index.js','js/main.js']
// };

gulp.task('default',['less'],function () {
    return gulp.src('./src/myui.js')
        .pipe(react())
        .pipe(babel({
            presets:['babel-preset-es2015']
        }))
        .pipe(gulp.dest('./dest'))

    // gulp.src('js/*.js')
    //     .pipe(uglify())
    //     .pipe(concat('all.min.js'))
    //     .pipe(gulp.dest('build'));
});