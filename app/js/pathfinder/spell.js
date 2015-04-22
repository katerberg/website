(function () {
    angular.module('katerbergApp').factory('Spell', function() {
        var Spell;

        Spell = (function() {

            function Spell(args) {
                if (!args) {
                    return;
                }
                this.description = args.description;
                this.school = args.school;
                this.savingThrow = args.saving_throw;
                this.name = args.name;
                this.level = args.level;
                this.spellResistance = args.spell_resistance;
                this.area = args.area;
                this.castingTime = args.casting_time;
                this.effect = args.effect;
                this.descriptor = args.descriptor;
                this.range = args.range;
                this.shortDescription = args.short_description;
                this.components = args.components;
                this.duration = args.duration;
                this.subSchool = args.subschool;
                this.target = args.target;
            }

            return Spell;
        })();

        return Spell;
    });
})();

