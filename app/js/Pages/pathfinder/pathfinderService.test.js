describe('pathfinderService', function () {

    var instance,
        $http,
        rootScope;

    beforeEach(module('katerbergApp'));

    beforeEach(inject(function(pathfinderService, $rootScope, _$httpBackend_) {
        rootScope = $rootScope;
        $httpBackend = _$httpBackend_;
        instance = pathfinderService;
    }));


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('After start up', function () {

        describe('getSpellbook', function () {

            it('should fetch from http', function() {
                var executed = false,
                    expected0 = {'a': 'val'},
                    expected1 = {'another': 'val'},
                    dataFromHttp = [{'fields': expected0}, {'fields': expected1}];
                $httpBackend.expect('GET', 'static/spells.json').respond(dataFromHttp);

                instance.getSpellbook().then(function(data) {
                    executed = true;
                    expect(data.length).toEqual(2);
                    expect(data[0]).toEqual(expected0);
                    expect(data[1]).toEqual(expected1);
                });
                $httpBackend.flush();
                rootScope.$apply();

                expect(executed).toBeTruthy();
            });

            it('should strip any html', function() {
                var executed = false,
                    dirty0 = {'a': '<a foo="bar">val</a>'},
                    expected0 = {'a': 'val'},
                    dataFromHttp = [{'fields': dirty0}];
                $httpBackend.expect('GET', 'static/spells.json').respond(dataFromHttp);

                instance.getSpellbook().then(function(data) {
                    executed = true;
                    expect(data[0]).toEqual(expected0);
                });
                $httpBackend.flush();
                rootScope.$apply();

                expect(executed).toBeTruthy();
            });
        });
    });
});

