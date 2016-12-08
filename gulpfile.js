var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    paths = {
      static: 'dist',
      css: ['app/css/**/*', 'app/css/*'], distCSS: 'dist/app/css',
      testCss: ['test/css/**/*', 'test/css/*'], testCSS: 'dist/test/css',
      js: ['app/js/**/*', 'app/js/*'], distJs: 'dist/app/js',
      testJs: ['test/js/**/*', 'test/js/*'], testJS: 'dist/test',
      templates: 'app/**/*.html', distTemplates: 'dist/app',
      templatesTest: 'test/**/*.html', distTemplatesTest: 'dist/test',
      dist: 'dist/**/*'
    };

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.distCSS))
    .pipe(connect.reload());
});

gulp.task('testCss', function () {
  return gulp.src(paths.testCss)
    .pipe(gulp.dest(paths.testCSS))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp
    .src(paths.js)
    .pipe(gulp.dest(paths.distJs))
    .pipe(connect.reload());
});

gulp.task('testJs', function() {
  return gulp
    .src(paths.testJs)
    .pipe(gulp.dest(paths.testJS))
    .pipe(connect.reload());
});

gulp.task('templates', function() {
  return gulp
    .src(paths.templates)
    .pipe(gulp.dest(paths.distTemplates))
    .pipe(connect.reload());
});
gulp.task('templatesTest', function() {
  return gulp
    .src(paths.templatesTest)
    .pipe(gulp.dest(paths.distTemplatesTest))
    .pipe(connect.reload());
});

gulp.task('build', ['css', 'testCss', 'js', 'testJs', 'templates', 'templatesTest']);

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
  gulp.watch([paths.testCss], ['testCss']);
  gulp.watch([paths.testJs], ['testJs']);
  gulp.watch([paths.templatesTest], ['templatesTest']);
});

gulp.task('default', ['build', 'watch', 'connect']);
