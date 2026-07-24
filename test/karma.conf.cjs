// Karma configuration
// Modern configuration for testing

module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-aria/angular-aria.min.js',
      'node_modules/angular-cookies/angular-cookies.min.js',
      'node_modules/angular-messages/angular-messages.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-resource/angular-resource.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-sanitize/angular-sanitize.min.js',
      'node_modules/angular-touch/angular-touch.min.js',
      'node_modules/ngSmoothScroll/dist/angular-smooth-scroll.min.js',
      'node_modules/lodash/lodash.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],
    exclude: [],
    port: 8080,
    browsers: ['ChromeHeadlessCI'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-translate', '--disable-extensions']
      }
    },
    singleRun: true,
    colors: true,
    logLevel: config.LOG_INFO
  });
};
