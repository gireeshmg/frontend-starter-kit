module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src(['src/**/*.scss', '!src/semantic/**/*.scss'])
            //.pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('style.scss'))
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(plugins.rename("style.css"))
            .pipe(gulp.dest(config.paths.dist + 'styles'))
            .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            //.pipe(plugins.sourcemaps.write('.'))
            .pipe(plugins.cssmin())
            .pipe(plugins.rename('style.min.css'))
            .pipe(gulp.dest(config.paths.dist + 'styles'))
            .pipe(plugins.browserSync.reload({stream: true}));
    }
}
