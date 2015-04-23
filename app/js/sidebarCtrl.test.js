describe('SidebarCtrl', function() {

    var scope,
        location,
        rootScope;

    beforeEach(function() {
        module('katerbergApp');
    });

    describe('After start up', function() {
        var location;

        beforeEach(inject(function($controller, $rootScope, $location) {
            location = $location;
            spyOn(location, 'path');

            scope = $rootScope.$new();
            $controller('SidebarCtrl', {$scope: scope});
            scope.$digest();

            rootScope = $rootScope;
        }));

        it('should be defined', function() {
            expect(scope).toBeDefined();
        });

        describe('go', function() {
            it('should go to expected path', function() {
                var input = 'a-thing';

                scope.go(input);

                expect(location.path).toHaveBeenCalledWith(input);
            });
        });
    });
});
