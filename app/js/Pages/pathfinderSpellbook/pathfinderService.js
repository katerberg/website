(function () {
    angular.module('katerbergApp').factory('pathfinderService', function($http, $q) {
        function getSpellbook() {
            var deferred = $q.defer();

            $http.get('static/spells.json').success(function(data) {
                var spells = [];
                data.forEach(function(item) {
                    spells.push(item.fields);
                });
                deferred.resolve(spells);
            });

            return deferred.promise;
        }

        return {
            getSpellbook: getSpellbook
        };
    });
})();

