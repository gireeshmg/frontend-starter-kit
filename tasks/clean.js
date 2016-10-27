module.exports = function (gulp, plugins, config) {
    return function () {
        // gulp.src(config.paths.dist + '/**/*.*')
        //     .pipe(plugins.clean({force: true}));

        return gulp.src(config.paths.dist + '/*', { read: false })
            .pipe(plugins.rimraf());
    }
}
