var fs = require('fs');
var path = require('path');
var gulpif = require('gulp-if');

var isComponent = function(file) {
    return (file.path.indexOf('components') !== -1) ? true : false;
}

module.exports = function(gulp, plugins, config) {
    return function() {
        return gulp.src([config.paths.src + '/pages/**/*.+(html|njk)'])
            .pipe(plugins.data(function(file) {
                var jsonPath = file.path.replace(path.basename(file.path), '') + 'data.json';
                var relPath = path.relative(__dirname, jsonPath).replace('../', './');
                console.log(relPath, fs.existsSync(relPath));

                if(fs.existsSync(relPath)){
                    return JSON.parse(fs.readFileSync(relPath));
                }
                else {
                    return null;
                }
            }))
            .pipe(plugins.nunjucksRender({
                path: [config.paths.src + 'templates', config.paths.src + 'pages', config.paths.src + 'components']
            }))
            .pipe(gulpif(isComponent, gulp.dest(config.paths.dist + 'components'), gulp.dest(config.paths.dist )))

            .pipe(plugins.browserSync.reload({
                stream: true
            }));
    }
}
