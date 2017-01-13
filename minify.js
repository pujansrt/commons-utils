var gulp = require('gulp')
var babel = require('gulp-babel')
gulp.task('default', () => {
  return gulp.src('dist/commons-utils.js')
  .pipe(babel({presets: ['babili']}))
  .pipe(gulp.dest('dist'))
})
