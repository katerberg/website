describe('HomeCtrl', function () {

    var ctrl,
        rootScope;


    beforeEach(function () {
        module('k8HomeCtrl');
    });

    describe('After start up', function () {
        beforeEach(inject(function($controller, $rootScope) {
            var scope = $rootScope.$new();
            ctrl = $controller('HomeCtrl', {$scope: scope});
            scope.$digest();

            rootScope = $rootScope;
        }));

        it('should be defined', function () {
            expect(ctrl).toBeDefined();
        });
    });
});
