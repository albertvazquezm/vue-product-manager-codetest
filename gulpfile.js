var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("gulp-webpack");
var connect = require("gulp-connect");


gulp.task('build', function () {
    return gulp.src('index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});

gulp.task('connect', function () {
    connect.server();
});

gulp.task('sass', function () {
    return gulp.src('./style/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./style/**/*.scss', ['sass']);
});

gulp.task('watch', function () {
    gulp.watch('./components/*.vue', ['build']);
    gulp.watch('./index.html', ['build']);
    gulp.watch('./data/*.json', ['build']);
    gulp.watch('./index.js', ['build']);
})

gulp.task('dev', ['build', 'connect', 'watch', 'sass', 'sass:watch']);