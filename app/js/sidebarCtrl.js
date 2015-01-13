(function () {
    'use strict';

    angular.module('katerbergApp').controller('SidebarCtrl', function($scope, $location) {
        function goHome() {
            $location.path('home');
        }

        function goMinesweeper() {
            $location.path('minesweeper');
        }

        $scope.goHome = goHome;
        $scope.goMinesweeper = goMinesweeper;
    });
})();
