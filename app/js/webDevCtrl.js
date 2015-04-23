(function() {
    'use strict';

    angular.module('katerbergApp').controller('WebDevCtrl', function($scope, $location) {
        function goMinesweeper() {
            $location.path('minesweeper');
        }

        function goSpellbook() {
            $location.path('pathfinder-spellbook');
        }

        $scope.goMinesweeper = goMinesweeper;
        $scope.goSpellbook = goSpellbook;
    });
})();
