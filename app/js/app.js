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
          when('/about-me', {
            templateUrl: 'partials/about-me.html',
            controller: 'AboutMeCtrl'
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
