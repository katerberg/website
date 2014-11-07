(function () {
'use strict';

/* App Module */

var minesweeperApp = angular.module('minesweeperApp', [
  'ngRoute',

  'minesweeperControllers',
  'minesweeperFilters',
  'minesweeperServices'
]);

minesweeperApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
})();
