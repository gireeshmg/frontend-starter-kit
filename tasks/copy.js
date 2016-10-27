
module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.paths.dist + '*.js')
      		.pipe(gulp.dest(config.paths.dist + config.paths.scripts));
        gulp.src(config.paths.dist + '*.js')
            .pipe(plugins.clean({force: true}));

      	gulp.src(config.paths.dist + '*.css')
      		.pipe(gulp.dest(config.paths.dist + config.paths.styles));
        gulp.src(config.paths.dist + '*.css')
            .pipe(plugins.clean({force: true}));
    }
}
