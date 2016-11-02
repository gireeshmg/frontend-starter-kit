module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src(['src/**/*.js', '!src/semantic/**/*.js', '!src/**/*.spec.js'])
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'))
            .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(plugins.traceur())

            .pipe(plugins.concat('bundle.js'))
            .pipe(plugins.header(config.comment, {pkg: config.pkg}))
            //.pipe(plugins.banner(config.comment, {pkg: config.pkg}))
            .pipe(gulp.dest(config.paths.dist + config.paths.scripts))
            .pipe(plugins.rename({suffix: '.min'}))
            .pipe(plugins.uglify({
                preserveComments: 'license'
            }))
            //.pipe(plugins.header(config.comment, {pkg: config.pkg}))
    		.pipe(plugins.sourcemaps.write("./"))
    		.pipe(gulp.dest(config.paths.dist + config.paths.scripts))
    		.pipe(plugins.browserSync.reload({stream: true}));
    }
}
