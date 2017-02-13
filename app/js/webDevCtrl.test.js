describe('WebDevCtrl', function() {

    var scope,
        rootScope,
        $location;

    beforeEach(function() {
        module('katerbergApp');
    });

    describe('After start up', function() {

        beforeEach(inject(function($controller, $rootScope, _$location_) {
            $location = _$location_;

            scope = $rootScope.$new();
            $controller('WebDevCtrl', {$scope: scope});
            scope.$digest();

            rootScope = $rootScope;

            spyOn($location, 'path');
        }));

        it('should be defined', function() {
            expect(scope).toBeDefined();
        });

        describe('goSpellbook', function() {
            it('should go to the spellbook page', function() {
                scope.goSpellbook();

                expect($location.path).toHaveBeenCalledWith('pathfinder-spellbook');
            });
        });
    });
});
