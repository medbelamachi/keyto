/**
 * Created by med on 16/01/16.
 */
// Global configuration variables
var config = {
    appDir: './app',
    appEnvPath: './app-env.json',
    appPrototypeFilename: 'app-prototype.js',
    appPrototypePath: 'app-prototype.js',
    indexTemplatePath: './app/templates/index.tpl.html',
    appPrototypeTemplatePath: './app/templates/app-prototype.tpl.js',
    bowerDir: './app/bower_components',
    mockPath: './app/**/*_mock.js',
    karmaConfig: '/karma.conf.js',
    appVersion: '3.4.1.2-SNAPSHOT',
    finalZipName: 'dist',
    themesPath: './themes'
};

// Declare gulp dependencies
var gulp = require('gulp'),
    bower = require('gulp-bower');

/**
 * Get components with bower
 */
gulp.task('bower', function() {
    return bower().pipe(gulp.dest(config.bowerDir))
});