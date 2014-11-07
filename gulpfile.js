// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint'),
    minifyHTML = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var basedir = 'app/';

// Lint Task
gulp.task('lint', function() {
    return gulp.src(basedir + 'js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
 });

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(basedir + 'scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(basedir + 'js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//Compile HTML
gulp.task('html', function() {
    gulp.src(basedir + '/**/*.html')
        // .pipe(minifyHTML())
        .pipe(gulp.dest('dist'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(basedir + 'js/*.js', ['lint', 'scripts']);
    gulp.watch(basedir + 'scss/*.scss', ['sass']);
    gulp.watch(basedir + '**/*.html', ['html']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'html', 'watch']);
