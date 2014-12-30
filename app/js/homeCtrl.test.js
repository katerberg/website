describe('HomeCtrl', function () {

    var ctrl,
        rootScope;


    beforeEach(function () {
        module('katerbergApp');
    });

    describe('After start up', function () {
        beforeEach(inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            ctrl = $controller('HomeCtrl', {$scope: scope,
            dungeonService: {}});
            scope.$digest();

            rootScope = $rootScope;
        }));

        it('should be defined', function () {
            expect(ctrl).toBeDefined();
        });
    });
});
