(function() {
    angular.module('katerbergApp').factory('Spell', function() {
        var Spell;

        Spell = (function() {

            function Spell(args) {
                if (!args) {
                    return;
                }
                this.description = args.description;
                this.school = args.school;
                this.name = args.name;
                this.level = args.level;
                this.area = args.area;
                this.effect = args.effect;
                this.descriptor = args.descriptor;
                this.range = args.range;
                this.components = args.components;
                this.duration = args.duration;
                this.subSchool = args.subschool;
                this.target = args.target;
                // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
                this.savingThrow = args.saving_throw;
                this.spellResistance = args.spell_resistance;
                this.shortDescription = args.short_description;
                this.castingTime = args.casting_time;
                // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
            }

            return Spell;
        })();

        return Spell;
    });
})();

