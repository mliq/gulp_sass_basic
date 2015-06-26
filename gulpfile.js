var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass');

gulp.task('js', function(){
    gulp.src('builds/development/js/**/*');
});

gulp.task('html', function(){
    gulp.src('builds/development/*.html');
});

//gulp.task('css', function(){
//    gulp.src('builds/development/css/*.css');
//});

gulp.task('sass', function(){
    gulp.src('builds/development/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./builds/development/css/'));
});

gulp.task('watch', function(){
   gulp.watch('builds/development/js/**/*', ['js']);
   //gulp.watch('builds/development/css/*.css', ['css']);
   gulp.watch('builds/development/scss/*.scss', ['scss']);
   gulp.watch('builds/development/*.html', ['html']);
});

gulp.task('webserver', function(){
   gulp.src('builds/development/')
       .pipe(webserver({
           livereload: true,
           open: true
       }));
});

gulp.task('default', ['watch', 'html', 'js', 'sass', 'webserver']);