(function () {
    'use strict';

    angular.module('katerbergApp').controller('PathfinderSpellbookCtrl', function($scope, pathfinderService) {
        pathfinderService.getSpellbook().then(function(data) {
            $scope.spellbook = data;
        });


    });
})();
