module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src(config.paths.src + '**/*.{ttf,woff,eof,svg}')
      		.pipe(plugins.flatten())
     		.pipe(gulp.dest(config.paths.dist + config.paths.fonts))
    		.pipe(plugins.browserSync.reload({
        		stream: true
        	}));
    }
}
