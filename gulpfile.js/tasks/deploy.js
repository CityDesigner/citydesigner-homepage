var config = require('../config')

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');



var deployTask = function () {
  return gulp.src('./docs/**/*')
    .pipe(deploy())
}

gulp.task('deploy', ['build'], deployTask)
module.exports = deployTask
