
module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src('src/js/**/*.js', {read: false})
            .pipe(mocha({reporter: 'nyan'}))
    }
}
