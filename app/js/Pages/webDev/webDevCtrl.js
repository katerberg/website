(function () {
    'use strict';

    angular.module('katerbergApp').controller('WebDevCtrl', function($scope, $location) {
        function goMinesweeper() {
            $location.path('minesweeper');
        }

        $scope.goMinesweeper = goMinesweeper;
    });
})();
