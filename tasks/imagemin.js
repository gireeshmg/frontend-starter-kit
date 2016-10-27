module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src([config.paths.src + 'images/**/*', config.paths.src + 'components/**/images/*'])
            .pipe(plugins.cached(plugins.imagemin({
                progressive: true,
                interlaced: true,
                svgoPlugins: [{cleanupIDs: false}]
            })))
        	.pipe(plugins.flatten())
            .pipe(gulp.dest(config.paths.dist + config.paths.images))
        	.pipe(plugins.browserSync.reload({
        		stream: true
        	}));
    }
}
