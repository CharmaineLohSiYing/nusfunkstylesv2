const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const {src, series, parallel, dest, watch} = require('gulp')

const jsPath = 'src/**/*.js';
const cssPath='src/App.css';

function imgTask() {
    return src('public/dummy/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
}

function jsTask() {
    return src(jsPath).pipe(sourcemaps.init())
                        .pipe(concat('all.js'))
                        .pipe(terser())
                        .pipe(sourcemaps.write('.'))
                        .pipe(dest('dist/assets/js'));
}

function cssTask() {
    return src(cssPath).pipe(sourcemaps.init())
                        .pipe(concat('style.css'))
                        .pipe(postcss([autoprefixer(), cssnano()]))
                        .pipe(sourcemaps.write('.'))
                        .pipe(dest('dist/assets/css'));
}

function watchTask() {
    watch([cssPath], {interval: 1000}, cssTask);
}

exports.default = series(parallel(imgTask, cssTask), watchTask);

