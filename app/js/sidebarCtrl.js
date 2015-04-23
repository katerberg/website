(function() {
    'use strict';

    angular.module('katerbergApp').controller('SidebarCtrl', function($scope, $location) {
        function go(path) {
            $location.path(path);
        }
        $scope.go = go;
    });
})();
