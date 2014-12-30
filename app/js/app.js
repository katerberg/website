(function () {
'use strict';

/* App Module */

var katerbergApp = angular.module('katerbergApp', [
  'ngRoute',
  'k8HomeCtrl'
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
