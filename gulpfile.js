// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint'),
    minifyHTML = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
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
    return gulp.src(basedir + 'scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'));
});

// Move our Dependent CSS
gulp.task('dependentCss', function() {
    return gulp.src('static/bootstrap.min.css')
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([basedir + 'js/**/*.js', '!' + basedir + 'js/**/*.test.js'])
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Deploy dependency JS
gulp.task('bower', function() {
    return gulp.src(['bower_components/angular/angular.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/sugarjs/release/sugar-full.min.js'])
        .pipe(gulp.dest('dist/js'));
        
});

//Compile HTML
gulp.task('html', function() {
    gulp.src(basedir + '/**/*.html')
        .pipe(minifyHTML({
            "empty": true
        }))
        .pipe(gulp.dest('dist'));
});

//Move images
gulp.task('images', function() {
    gulp.src(basedir + '/images/*')
        .pipe(gulp.dest('dist/images'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(basedir + 'js/**/*.js', ['lint', 'scripts']);
    gulp.watch(basedir + 'scss/**/*.scss', ['sass']);
    gulp.watch(basedir + '**/*.html', ['html']);
    gulp.watch(basedir + 'images/*', ['images']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'dependentCss', 'bower', 'scripts', 'html', 'images', 'watch']);
