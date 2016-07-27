var gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch');

//Tasks

gulp.task('templates', function(){
	return gulp.src('src/jade/*.jade')
	.pipe(jade())
	.pipe(gulp.dest("."));
});

gulp.task('javascript', function(){
	return gulp.src(['src/assets/js/*.js', 'src/assets/js/**/*.js'])
	.pipe(concat('concated.js'))
	.pipe(rename('whisky.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js/'));
});

gulp.task('stylus', function(){
	return gulp.src('src/assets/stylus/app.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(rename('charizard.min.css'))
	.pipe(gulp.dest('assets/css/'));
})

gulp.task('default', ['stylus', 'javascript', 'templates'], function(){
	gulp.watch([
		'src/assets/stylus/*.styl',
		'src/assets/stylus/**/*.styl'
	], ['stylus']);
	gulp.watch([
		'src/jade/*.jade',
		'src/jade/**/*.jade'
	], ['templates']);
	gulp.watch([
		'src/assets/js/*.js',
		'src/assets/js/**/*.js'
	], ['javascript']);
});