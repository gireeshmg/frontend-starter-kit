var browserSync 	= require('browser-sync').create();

module.exports = function (gulp, plugins, config) {
    return function () {
        return plugins.browserSync.init({
            server: {
                baseDir: config.paths.dist
            }
        });
    }
}
