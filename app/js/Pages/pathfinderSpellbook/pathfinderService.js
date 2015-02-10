(function () {
    angular.module('katerbergApp').factory('pathfinderService', function($http, $q) {
        function getSpellbook() {
            var deferred = $q.defer();

            $http.get('static/spells.json').success(function(data) {
                var spells = [];
                data.forEach(function(dirtySpell) {
                    var cleanFields={};
                    Object.keys(dirtySpell.fields, function(key, value) {
                        dirtySpell.fields[key] = value.replace(/<[^>]*>/gm, '');
                    });
                    spells.push(dirtySpell.fields);
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

