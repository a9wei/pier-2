var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var compass = require('gulp-compass');
var sass = require('gulp-ruby-sass');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var jade = require('gulp-jade');
var merge = require('merge-stream');

var assetsFolder = {
	css: './assets/css/**/*.css',
	js: './assets/js/**/*.js',
	sass: './assets/sass/**/*.sass',
	jade: './jade/**/*.jade'
};


// watch files
gulp.task('watch', function(){
	gulp.watch(assetsFolder.sass, ['compass']);
	gulp.watch(assetsFolder.jade, ['jade'])
});

// browser Sync to 8080 port
gulp.task('browser-sync', function(){
	browserSync({
		open: false,
		server: {
			baseDir: './'
		},
		port: 8080
	})
});

// Jade Compile
gulp.task('jade', function() {
  var all = gulp.src('./jade/**/*.jade')
    .pipe(changed('./html/*.html', {extension: '.html'}))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./html'));

  // var index = gulp.src('./jade/index.jade')
  //   .pipe(jade({
  //     pretty: true
  //   }))
  //   .pipe(gulp.dest('./html'));
  // return merge(all, index);
  return all;
});

//compass compil
gulp.task('compass', function(){
	var stream = gulp.src(assetsFolder.sass)
	.pipe(compass({
		css: './assets/css',
		sass: './assets/sass',
		sourcemap:  true
	})).on('error', function(err){
		console.log('---<3--');
		console.log(err.message);
		console.log('-----');
		browserSync.notify(err.message, 5000);
		stream.end();
	})
	.pipe(gulp.dest('./assets/css'))
	.pipe(reload({stream: true}));
	return stream;
});

// watch assets files
var watchFolder = [
	'./assets/sass/**/*.sass',
	'./assets/css/**/*.css',
	'./assets/js/**/*.js',
	'./*.html',
	'./html/*.html',
	'./jade/**/*.jade'
	];
gulp.task('livereload',['browser-sync', 'watch'], function(){
	gulp.watch( watchFolder , function(file){
		if (file.type === 'changed')
		{
			return reload(file.path);
		}
	});
});

gulp.task('default', ['browser-sync','livereload','compass','jade']);

