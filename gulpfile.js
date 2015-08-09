var gulp       = require('gulp');
var jade       = require('gulp-jade');
var gLess      = require('gulp-less');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var cssMinify  = require('gulp-minify-css');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('scripts',function(){
	return gulp.src('source/scripts/*.js')
	.pipe(sourceMaps.init())
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(sourceMaps.write('build/maps'))
	.pipe(gulp.dest('build/js'));
});

gulp.task('styles',function(){
	return gulp.src('source/styles/style.less')
	.pipe(sourceMaps.init())
	.pipe(gLess())
	.pipe(cssMinify())
	.pipe(sourceMaps.write('build/maps'))
	.pipe(gulp.dest('build/js'));
});

gulp.task('templates',function(){
	return gulp.src('source/*.jade')
	.pipe(jade())
	.pipe(gulp.dest('build'));
});

gulp.task('default',['scripts','styles','templates']);