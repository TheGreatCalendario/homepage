'use strict';

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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
    //$locationProvider.html5Mode(true);
  });
