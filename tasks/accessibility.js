module.exports = function (gulp, plugins, config) {
    return function () {
        gulp.src(config.paths.reports + 'accessibility/**/*')
            .pipe(plugins.clean({force: true}));

        return gulp.src(config.paths.dist + '**/*.html')
            .pipe(plugins.accessibility({
              force: true,
              accessibilityLevel: 'WCAG2A'
            }))
            .on('error', console.log)
            .pipe(plugins.accessibility.report({reportType: 'txt'}))
            .pipe(plugins.rename({
              extname: '.txt'
            }))
            .pipe(gulp.dest(config.paths.reports + 'accessibility'));
    }
}
