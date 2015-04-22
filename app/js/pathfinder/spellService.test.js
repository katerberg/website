describe('spellService', function () {

    var instance;

    beforeEach(module('katerbergApp'));

    beforeEach(inject(function(spellService) {
        instance = spellService;
    }));


    describe('After start up', function () {
        describe('spellify', function() {
            it('should strip any html', function() {
                var dirty = {'a': '<a foo="bar">val</a>', another: 'value'},
                    expected = {'a': 'val', another: 'value'},
                    input = {'fields': dirty};

                var result = instance.spellify(input);

                expect(result).toEqual(expected);
            });
        });
    });
});


