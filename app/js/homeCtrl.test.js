describe('HomeCtrl', function () {

    var scope,
        rootScope;


    beforeEach(function () {
        module('katerbergApp');
    });

    describe('After start up', function () {

        beforeEach(inject(function($controller, $rootScope) {

            scope = $rootScope.$new();
            $controller('HomeCtrl', {$scope: scope});
            scope.$digest();

            rootScope = $rootScope;
        }));

        it('should be defined', function () {
            expect(scope).toBeDefined();
        });
    });
});
