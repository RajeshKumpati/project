var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload');
const image = require('gulp-imagemin');

	gulp.task('build',['sass','html-copy','images'],
	  function(){

	});

	gulp.task('sass', function () {
      return gulp.src('./src/scss/**/*.scss')
        .pipe(sass({includePaths: [
          './node_modules/bootstrap-sass/assets/stylesheets'
        ]})
        .on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));
    });


  gulp.task('html-copy', function () {
          return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./build'));
  });

 gulp.task('images', function () {
          return gulp.src('./src/images/*')
		    .pipe(imagemin({progressive:true}))
            .pipe(gulp.dest('./build/images'));
  });

  gulp.task('watch', function () {
         gulp.watch('./src/**/*.scss',['sass']);
         gulp.watch('./src/**/*.html',['html-copy']);
         gulp.watch('./src/**/*.',['images']);

  });
