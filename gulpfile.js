var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
<<<<<<< .merge_file_a09032
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin');


=======
    images=require('gulp-images'),
    livereload = require('gulp-livereload');
>>>>>>> .merge_file_a09052
	gulp.task('build',['sass','html-copy','image-copy'],
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

  gulp.task('image-copy', function () {
          return gulp.src('./src/images/*.*')
            .pipe(gulp.dest('./build/images'));
  });

 gulp.task('images', function () {
          return gulp.src('./src/images/*.*')
            .pipe(gulp.dest('./build'));
  });

  gulp.task('watch', function () {
         gulp.watch('./src/**/*.scss',['sass']);
         gulp.watch('./src/**/*.html',['html-copy']);
<<<<<<< .merge_file_a09032
         gulp.watch('./src/**/*.png',['image-copy']);

=======
         gulp.watch('./src/**/*.*',['images']);
>>>>>>> .merge_file_a09052
  });
