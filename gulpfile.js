// gulpfile.js

var gulp = require("gulp"),
    plugins = require('gulp-load-plugins')(),
    runSequence = require('run-sequence'),
    semanticWatch = require('./src/semantic/tasks/watch'),
    semanticBuild = require('./src/semantic/tasks/build'),
    pkg = require('./package.json'),
    config = require('./gulp-config.json');
var assemble = require('assemble');
var path = require('path');

var comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * Date: <%= new Date().toLocaleString() %>\n' +
    ' * Copyright <%= new Date().getFullYear() %>, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n';

plugins.browserSync = require('browser-sync').create();
plugins.assembleApp = assemble();
config.pkg = pkg;
config.comment = comment;

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, config);
}



gulp.task('watch', ['browserSync', 'less', 'scripts', 'assemble', 'imagemin'], getTask('watch'));
gulp.task('less', getTask('less'));
gulp.task('clean', getTask('clean'));
gulp.task('fonts', getTask('fonts'));

gulp.task('imagemin', getTask('imagemin'));
//gulp.task('nunjucks', getTask('nunjucks'));
gulp.task('scripts', getTask('scripts'));
gulp.task('vendorjs', getTask('vendorjs'));
gulp.task('vendorcss', getTask('vendorcss'));
gulp.task('copy', getTask('copy'));
gulp.task('browserSync', getTask('browserSync'));
gulp.task('connect', getTask('connect'));
gulp.task('accessibility', getTask('accessibility'));
gulp.task('assembleLoad', getTask('assembleLoad'));
gulp.task('assemble', getTask('assemble'));
gulp.task('vendorAssets', getTask('vendorAssets'));

// gulp.task('watchUI', semanticWatch);
// gulp.task('buildUI', semanticBuild);

gulp.task('dev', function(callback) {
    runSequence(
        'clean', ['vendorjs', 'vendorcss', 'scripts', 'assemble', 'fonts', 'imagemin', 'less'],
        'copy', 'vendorAssets', ['watch']
    );
});

gulp.task('default', function(callback) {
    runSequence(
        'clean', ['vendorjs', 'vendorcss', 'scripts', 'assemble', 'fonts', 'imagemin', 'less'],
        'copy', 'vendorAssets'
    );
});
