'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var conf_local = require('./conf_local');

gulp.task('deploy', function () {
  return gulp.src([
    path.join(conf.paths.dist, '/**/*'),
  ])
    .pipe(gulp.dest(path.join(conf_local.knownly_website_folder, '/')));
});
