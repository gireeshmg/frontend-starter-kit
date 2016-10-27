var fs = require('fs');
var path = require('path');
var gulpif = require('gulp-if');

module.exports = function(gulp, plugins, config) {
    return function() {
        plugins.assembleApp.layouts(path.resolve(config.paths.src, 'templates/layouts/*.hbs'));
        plugins.assembleApp.partials([
            path.resolve(config.paths.src, 'templates/partials/*.hbs'),
            path.resolve(config.paths.src, 'components/**/*.hbs')
        ]);
        plugins.assembleApp.pages(path.resolve(config.paths.src, 'templates/pages/*.hbs'));
        plugins.assembleApp.data(path.resolve(config.paths.src, '**/*.json'));

        return plugins.assembleApp.toStream('pages')
            .pipe(plugins.assembleApp.renderFile())
            .pipe(plugins.rename({
                extname: '.html'
            }))
            .pipe(plugins.assembleApp.dest('dist'))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
    }
}
