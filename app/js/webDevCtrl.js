(function() {
    'use strict';

    angular.module('katerbergApp').controller('WebDevCtrl', function($scope, $location) {
        function goSpellbook() {
            $location.path('pathfinder-spellbook');
        }

        $scope.goSpellbook = goSpellbook;
    });
})();
