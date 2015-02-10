describe('PathfinderSpellbookCtrl', function () {

    var scope,
        rootScope;


    beforeEach(function () {
        module('katerbergApp');
    });

    describe('After start up', function () {
        var pathfinderService;

        beforeEach(inject(function($controller, $rootScope, _pathfinderService_) {
            pathfinderService = _pathfinderService_;
            spyOn(pathfinderService, 'getSpellbook').and.returnValue({then: function(){}});

            scope = $rootScope.$new();
            $controller('PathfinderSpellbookCtrl', {$scope: scope});
            scope.$digest();

            rootScope = $rootScope;
        }));

        it('should be defined', function () {
            expect(scope).toBeDefined();
        });
    });
});
