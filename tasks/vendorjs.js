module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp.src(config.paths.vendorjs)
            .pipe(plugins.concat('vendor.js'))
            .pipe(gulp.dest(config.paths.dist + config.paths.scripts))
            .pipe(plugins.uglify({
    			preserveComments: "license",
    			compress: {
    				negate_iife: false
    			}
    		}))
            .pipe(plugins.rename({suffix: '.min'}))
    		.pipe(gulp.dest(config.paths.dist + config.paths.scripts));
    }
}
