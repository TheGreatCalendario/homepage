'use strict';

console.log('[DEBUG] main.js loaded');

/**
 * @ngdoc function
 * @name therapiepapstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the therapiepapstApp
 */
angular.module('therapiepapstApp')
  .controller('MainCtrl', function () {
    console.log('[DEBUG] MainCtrl instantiated');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
