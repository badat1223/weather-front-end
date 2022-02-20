const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('src/assets/sass/**/*.scss')//sourcfile
    .pipe(sass())//compiler
    .pipe(purgecss({ content: ['src/*.tsx'] }))
    .pipe(dest('src/assets/css'))//output to css in root Dir
}

function watchTask() {
  watch(['src/assets/sass/**/*.scss', 'src/*.tsx'], buildStyles)///Watches Source Sass File
}

exports.default = series(buildStyles, watchTask)//Export Files