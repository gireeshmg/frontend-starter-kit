module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src(config.paths.vendorcss)
            .pipe(plugins.concat("vendor.css"))
            .pipe(gulp.dest(config.paths.dist + 'styles'))
            .pipe(plugins.cssmin())
            .pipe(plugins.rename({suffix: '.min'}))
            .pipe(gulp.dest(config.paths.dist + 'styles'));
    }
}
