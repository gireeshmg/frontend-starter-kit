var fs = require('fs');
var path = require('path');
var assemble = require('assemble')();
//var helpers = require('handlebars-helpers')();

module.exports = function(gulp, plugins, config) {
    return function() {
        assemble.layouts(path.resolve(config.paths.src, 'templates/layouts/*.hbs'));
        assemble.partials([
            path.resolve(config.paths.src, 'templates/partials/*.hbs'),
            path.resolve(config.paths.src, 'components/**/*.hbs')
        ]);
        assemble.pages(path.resolve(config.paths.src, 'templates/pages/*.hbs'));
        assemble.data(path.resolve(config.paths.src, '**/*.json'));
        //assemble.helpers(helpers);

        return assemble.toStream('pages')
            .pipe(assemble.renderFile())
            .pipe(plugins.rename({
                extname: '.html'
            }))
            .pipe(assemble.dest('dist'))
            .pipe(plugins.browserSync.reload({
                stream: true
            }));
    }
}
