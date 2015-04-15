(function () {
    angular.module('katerbergApp').factory('pathfinderService', function($http, $q) {
        function getSpellbook() {
            return $http.get('static/spells.json').then(function(res) {
                return res.data.map(function(dirtySpell) {
                    Object.keys(dirtySpell.fields, function(key, value) {
                        dirtySpell.fields[key] = value.replace(/<[^>]*>/gm, '');
                    });
                    return dirtySpell.fields;
                });
            });

        }
        var casterTypes = ['Bard',
            'Cleric',
            'Druid',
            'Paladin',
            'Ranger',
            'Sorcerer/Wizard'];

        return {
            getSpellbook: getSpellbook,
            casterTypes: casterTypes
        };
    });
})();

