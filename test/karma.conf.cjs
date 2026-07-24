// Karma configuration
// Modern configuration for testing

module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
      'https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js',
      'https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-animate.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-aria.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-cookies.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-messages.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-resource.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-route.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-sanitize.min.js',
      'https://cdn.jsdelivr.net/npm/angular.js@1.8.3/angular-touch.min.js',
      'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
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
