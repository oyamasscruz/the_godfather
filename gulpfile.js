const gulp = require('gulp'); //to install a dev dependence, has to create a constant like this
const sass = require('gulp-sass')(require('sass')); //to install sass dependence, you have to install, gulp-sass and sass, this is why have to require.
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

//to call the dependende you have to call the dependence as a function.
function styles() {
    return gulp.src('./src/styles/*.scss') // rigth here you have to use gulp.src , so say where is the source(src) of document that will be modificate
        .pipe(sass({outputStyles:'compressed'}))// rigth here you call the function of the dependence - sass --> compressed
        .pipe(gulp.dest('./dist/css')); // and at the final, you say the place of modification final;
}

function images() {
    return gulp.src('./src/images/**/*', { encoding: false })
        .pipe(imagemin()) // in this case u use the imagemin;
        .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify()) // in this case u use the uglify to compress js archives
        .pipe(gulp.dest('./dist/js'));
}

exports.default = gulp.parallel(styles, images, scripts) // to call all of dependeces you have to use gulp.parallel, to call as parallel tasks.

exports.watch = function() { // this function it's to watch the modifications of documents that are on watch, as SASS archive, JS archive and images archives.
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}