'use strict';
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	fileinclude = require('gulp-file-include'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect-multi')(),
	concat = require('gulp-concat');

gulp.task('js',function(){
	gulp.src(['app/Skins/js/**/*.js'])
		.pipe(concat('master.js'))
		.pipe(gulp.dest('app/complied-html/Skins/js'));		
});

gulp.task('fileinclude', function() {
  gulp.src(['app/pages/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./app/complied-html'));
    
});

gulp.task('sass', function () {
    return gulp.src('app/Skins/css/*.scss')
		.pipe(sass({
			sourcemapPath: 'app/Skins/css/sass',
			style: 'compressed',
			lineNumbers: true
		}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('app/complied-html/Skins/css'))
});

gulp.task('connect', connect.server({
  root: ['app/complied-html'],
  port: 8000,
  livereload: true,
  open: {
    browser: 'firefox' // if not working OS X browser: 'Google Chrome'
  }
}));

gulp.task('watch', function() {
	var server = livereload();
	gulp.watch('app/Skins/js/**/*.js', ['js']);
	gulp.watch('app/Skins/css/**/*.scss', ['sass']);
	gulp.watch(['app/pages/*.html','app/partials/*.html'], ['fileinclude']);
});

gulp.task('default', ['js','fileinclude','sass','connect','watch']);