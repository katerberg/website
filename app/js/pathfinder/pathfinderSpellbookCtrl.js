(function () {
    'use strict';

    angular.module('katerbergApp').controller('PathfinderSpellbookCtrl', function($scope, pathfinderService) {
        pathfinderService.getSpellbook().then(function(data) {
            $scope.spellbook = data;
        });

        $scope.casterTypes = pathfinderService.casterTypes;
        $scope.$watch('search.level', function(item) {
            if (item === null) {
                $scope.search.level = undefined;
            }
        });
    });
})();
