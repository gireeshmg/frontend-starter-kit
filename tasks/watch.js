module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.watch('src/**/*.less', ['less']);
    	//gulp.watch('src/**/*.html', ['html']);
    	gulp.watch('src/**/*.js', ['scripts']);
    	//gulp.watch('src/**/*.+(html|njk|json)', ['nunjucks']);
    	//gulp.watch('src/**/*.+(html|njk|json)', ['nunjucks']);
        gulp.watch('src/**/*.+(hbs|json)', ['assemble']);
    	gulp.watch(config.paths.src + 'images/**/*', ['imagemin']);
    }
}
