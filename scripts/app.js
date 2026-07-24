'use strict';

console.log('[DEBUG] app.js loaded');

/**
 * @ngdoc overview
 * @name therapiepapstApp
 * @description
 * # therapiepapstApp
 *
 * Main module of the application.
 */
angular
  .module('therapiepapstApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-smooth-scroll'
  ])
  .config(function ($routeProvider) {
    console.log('[DEBUG] Angular config running');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
  });

console.log('[DEBUG] Angular module defined');
