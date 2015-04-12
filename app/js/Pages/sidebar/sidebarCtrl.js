(function () {
    'use strict';

    angular.module('katerbergApp').controller('SidebarCtrl', function($scope, $location) {
        function goHome() {
            $location.path('home');
        }

        function goWebDev() {
            $location.path('web-dev');
        }

        function goMtg() {
            $location.path('mtg');
        }

        function goAboutMe() {
            $location.path('about-me');
        }

        $scope.goAboutMe = goAboutMe;
        $scope.goHome = goHome;
        $scope.goMtg = goMtg;
        $scope.goWebDev = goWebDev;
    });
})();
