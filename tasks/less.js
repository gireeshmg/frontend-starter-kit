var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({
        browsers: ["last 2 versions"]
    });

module.exports = function(gulp, plugins, config) {
    return function() {
        return gulp.src(['src/**/*.less', '!src/semantic/**/*.less'])
            .pipe(plugins.lesshint())
            .pipe(plugins.lesshint.reporter('lesshint-reporter-stylish'))
            .pipe(plugins.sourcemaps.init({
                loadMaps: true
            }))
            .pipe(plugins.less({
                plugins: [autoprefix]
            }))

            .pipe(plugins.concat('styles.css'))

            .pipe(gulp.dest(config.paths.dist + config.paths.styles))

            .pipe(plugins.cssmin({
                sourceMap: true
            }))
            .pipe(plugins.header(config.comment, {
                pkg: config.pkg
            }))
            .pipe(plugins.rename({
                suffix: '.min'
            }))

            .pipe(plugins.sourcemaps.write('./'))

            .pipe(gulp.dest(config.paths.dist + config.paths.styles))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
    }
}
