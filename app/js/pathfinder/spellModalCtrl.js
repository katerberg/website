(function() {
    'use strict';

    angular.module('katerbergApp').controller('SpellModalCtrl', function($scope, $modalInstance, spell) {
        function close() {
            $modalInstance.close();
        }

        $scope.close = close;
        $scope.spell = spell;
    });
})();
