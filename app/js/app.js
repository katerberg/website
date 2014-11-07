(function () {
'use strict';

/* App Module */

var katerbergApp = angular.module('katerbergApp', [
  'ngRoute',

  'katerbergControllers'
]);

katerbergApp.config(['$routeProvider',
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
