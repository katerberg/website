(function () {
'use strict';

var katerbergApp = angular.module('katerbergApp', [
  'ngRoute'
]);

katerbergApp.config(function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/minesweeper', {
        templateUrl: 'partials/minesweeper.html',
        controller: 'MinesweeperCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  });
})();
