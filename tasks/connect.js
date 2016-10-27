module.exports = function (gulp, plugins, config) {
    return function () {
        return plugins.connect.server({
    		root: config.paths.dist,
    		port: 8888,
    		livereload: true
    	});
    }
}
