(function () {
    angular.module('katerbergApp').factory('spellService', function() {
        function spellify(dirtySpell) {
            Object.keys(dirtySpell.fields, function(key, value) {
                dirtySpell.fields[key] = value.replace(/<[^>]*>/gm, '');
            });
            return dirtySpell.fields;
        }

        return {
            spellify: spellify
        };
    });
})();
