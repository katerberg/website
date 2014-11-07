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

(function () {
    'use strict';

    var minesweeperControllers = angular.module('minesweeperControllers', []);

    minesweeperControllers.controller('HomeCtrl', ['$scope', function($scope) {
    }]);
})();

(function () {
'use strict';

/* Filters */

angular.module('minesweeperFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
})();

(function () {
'use strict';

/* Services */

var minesweeperServices = angular.module('minesweeperServices', ['ngResource']);

minesweeperServices.factory('Phone', ['$resource', function($resource){


    return $resource('phones/:phoneId.json', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
}]);
})();
