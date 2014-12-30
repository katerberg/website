describe('dungeonService', function () {

    var instance,
        rootScope;


    beforeEach(module('katerbergApp'));
        
    beforeEach(inject(function(_dungeonService_) {
        instance = _dungeonService_;
    }));
          
    describe('After start up', function () {

        it('should be defined', function () {
            expect(instance.getState()).toBeDefined();
        });
    });
});

