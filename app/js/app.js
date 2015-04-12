(function () {
'use strict';

    var katerbergApp = angular.module('katerbergApp', [
        'ngRoute'
    ]);

    katerbergApp.config(function($routeProvider, $httpProvider) {
        $httpProvider.defaults.cache = true;

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
          when('/pathfinder-spellbook', {
            templateUrl: 'partials/pathfinder-spellbook.html',
            controller: 'PathfinderSpellbookCtrl'
          }).
          when('/web-dev', {
            templateUrl: 'partials/web-dev.html',
            controller: 'WebDevCtrl'
          }).
          when('/mtg', {
            templateUrl: 'partials/mtg.html',
            controller: 'MtgCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });
})();
