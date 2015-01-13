describe('MinesweeperCtrl', function () {

    var scope,
        rootScope;


    beforeEach(function () {
        module('katerbergApp');
    });

    describe('After start up', function () {

        beforeEach(inject(function($controller, $rootScope) {

            scope = $rootScope.$new();
            $controller('MinesweeperCtrl', {$scope: scope});
            scope.$digest();

            rootScope = $rootScope;
        }));

        it('should be defined', function () {
            expect(scope).toBeDefined();
        });

        describe('resetGame', function () {
            beforeEach(function () {
                spyOn(scope, 'resetBoard');
            });

            it('should reset loss', function () {
                scope.hasLost = true;

                scope.resetGame();

                expect(scope.hasLost).toBeFalsy();
            });

            it('should reset win', function () {
                scope.hasWon = true;

                scope.resetGame();

                expect(scope.hasWon).toBeFalsy();
            });

            it('should reset the board', function () {
                scope.resetGame();

                expect(scope.resetBoard).toHaveBeenCalled();
            });
        });
    });
});

