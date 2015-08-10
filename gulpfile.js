var gulp       = require('gulp');
var jade       = require('gulp-jade');
var gLess      = require('gulp-less');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var cssMinify  = require('gulp-minify-css');
var sourceMaps = require('gulp-sourcemaps');
var imagemin   = require('gulp-imagemin');

gulp.task('scripts',function(){
	return gulp.src('source/scripts/*.js')
	.pipe(sourceMaps.init())
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(sourceMaps.write('../maps'))
	.pipe(gulp.dest('build/js'));
});

gulp.task('styles',function(){
	return gulp.src('source/styles/style.less')
	.pipe(sourceMaps.init())
	.pipe(gLess())
	.pipe(cssMinify())
	.pipe(sourceMaps.write('../maps'))
	.pipe(gulp.dest('build/css'));
});

gulp.task('templates',function(){
	return gulp.src('source/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('build'));
});

gulp.task('images', function () {
    return gulp.src('source/images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('build/imgs'));
});

gulp.task('watch',function(){
	gulp.watch('source/**/*.jade',['templates']);
	gulp.watch('source/styles/*.less',['styles']);
	gulp.watch('source/scripts/*.js',['scripts']);
});

gulp.task('default',['scripts','styles','templates','images','watch']);