(function() {
    'use strict';

    angular.module('katerbergApp').controller('SpellModalCtrl', function($scope, $modalInstance, spell) {
        function close() {
            $modalInstance.close();
        }

        function showDetails(spell) {
            spell.showDetails = true;
        }

        $scope.close = close;
        $scope.spell = spell;
        $scope.showDetails = showDetails;
    });
})();
