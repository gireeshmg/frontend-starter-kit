var es = require('event-stream');

module.exports = function (gulp, plugins, config) {
    return function () {

        var assets = (config.paths.vendorAssets);
    
        return es.merge(assets.map(function (obj) {
            console.log(obj.from, config.paths.dist + obj.to)
            return gulp.src(obj.from)
              //.pipe(concat(obj.bundleName))
              .pipe(gulp.dest(config.paths.dist + obj.to));
          }));
    }
}
