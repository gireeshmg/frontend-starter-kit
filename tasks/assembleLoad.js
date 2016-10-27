var path = require('path');

module.exports = function (gulp, plugins, config) {
    return function () {
        plugins.assembleApp.layouts(path.resolve(config.paths.src, 'templates/layouts/*.hbs'));
        plugins.assembleApp.partials(path.resolve(config.paths.src, 'templates/partials/*.hbs'));
        plugins.assembleApp.pages(path.resolve(config.paths.src, 'templates/pages/*.hbs'));
        cb();
    }
}
