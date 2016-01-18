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
    appVersion: '0.0.1-SNAPSHOT',
    finalZipName: 'dist',
    themesPath: './themes'
};

// Declare gulp dependencies
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    replace = require('gulp-replacer'),
    gulpNgConfig = require('gulp-ng-config'),
    bower = require('gulp-bower'),
    browserSync = require('browser-sync');

// vars
var loadMockExcludes;

// Functions

/**
 * Function to generate mock files
 */
function loadMock() {
    var sourcePatterns = [];

    sourcePatterns.push(config.mockPath);
    if (loadMockExcludes) {
        sourcePatterns = sourcePatterns.concat(loadMockExcludes);
    }

    console.log('Loading mock files patterns : ' + sourcePatterns);

    var sources = gulp.src(sourcePatterns);
    sources.pipe(concat('temp.js'))
        .pipe(replace('--content--', config.appPrototypeTemplatePath, config.appPrototypeFilename))
        .pipe(gulp.dest(config.appDir));
};

function generateConfig(env) {
    gulp.src(config.appEnvPath)
        .pipe(gulpNgConfig('app.env', {
            environment: env
        }))
        .pipe(gulp.dest(config.appDir));
};


//Tasks

/**
 * Get components with bower
 */
gulp.task('bower', function () {
    return bower().pipe(gulp.dest(config.bowerDir))
});


/**
 * Auto Reload the browser
 */
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    })
});

/**
 * Watch for changes in the page
 */
gulp.task('watchWithBrowserSync', ['browserSync'], function () {
    gulp.watch(config.mockPath, ['load-mock']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
});

gulp.task('watch', function () {
    gulp.watch(config.mockPath, ['load-mock']);
});

/**
 * starting the webserver
 */
gulp.task('webserver', function () {
    connect.server({
        port: 8000
    });
});

/**
 * Load the mock files in the browser
 */
gulp.task('load-mock', function () {
    loadMockExcludes = ['!./app/app_mock.js'];
    loadMock();
});

/**
 * Main gulp task to launch for mock development.
 */
gulp.task('mocked', ['bower', 'load-mock', 'webserver', 'watch'], function () {
    generateConfig('local');
});

/**
 * Main gulp task to launch for mock development.
 */
gulp.task('liveLocal', ['bower',  'webserver', 'watch'], function () {
    loadMock();
    generateConfig('local');
});