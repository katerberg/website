describe('Spell', function () {

    var Spell;

    beforeEach(module('katerbergApp'));

    beforeEach(inject(function(_Spell_) {
        Spell = _Spell_;
    }));

    it('instantiates without arguments', function() {
        expect(new Spell() instanceof Spell).toBe(true);
    });

    it('instantiates with parameters', function() {
        expect(new Spell({description: 'something'}) instanceof Spell).toBe(true);
    });
});
