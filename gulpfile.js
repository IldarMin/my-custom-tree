var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    paths = {
      static: 'dist',
      css: ['app/css/**/*', 'app/css/*'], distCSS: 'dist/css',
      js: ['app/js/**/*', 'app/js/*'], distJs: 'dist/js',
      templates: 'app/**/*.html', distTemplates: 'dist',
      dist: 'dist/**/*'
    };

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.distCSS))
    .pipe(connect.reload());
});


gulp.task('js', function() {
  return gulp
    .src(paths.js)
    .pipe(gulp.dest(paths.distJs))
    .pipe(connect.reload());
});

gulp.task('templates', function() {
  return gulp
    .src(paths.templates)
    .pipe(gulp.dest(paths.distTemplates))
    .pipe(connect.reload())
    .pipe(connect.reload());
});

gulp.task('build', ['css', 'js', 'templates']);

gulp.task('connect', function() {
  connect.server({
    root: paths.static,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch([paths.css], ['css']);
  gulp.watch([paths.js], ['js']);
  gulp.watch([paths.templates], ['templates']);
});

gulp.task('default', ['build', 'watch', 'connect']);
