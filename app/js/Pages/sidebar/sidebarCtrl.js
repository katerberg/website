(function () {
    'use strict';

    angular.module('katerbergApp').controller('SidebarCtrl', function($scope, $location) {
        function goHome() {
            $location.path('home');
        }

        function goMinesweeper() {
            $location.path('minesweeper');
        }

        function goAboutMe() {
            $location.path('about-me');
        }

        $scope.goAboutMe = goAboutMe;
        $scope.goHome = goHome;
        $scope.goMinesweeper = goMinesweeper;
    });
})();
