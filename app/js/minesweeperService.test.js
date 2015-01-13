describe('dungeonService', function () {

    var instance,
        rootScope;

    beforeEach(module('katerbergApp'));

    beforeEach(inject(function(minesweeperService) {
        instance = minesweeperService;
    }));

    describe('After start up', function () {

        describe('createNewCell', function () {
            beforeEach(function () {
                spyOn(Math, 'random');
            });

            it('should return an object', function () {
                expect(typeof instance.createNewCell()).toEqual('object');
            });

            it('should be a bomb 20% of the time', function () {
                Math.random.and.returnValue(0.19);

                var cell = instance.createNewCell();

                expect(cell.bomb).toBeTruthy();
            });

            it('should not be a bomb 80% of the time', function () {
                Math.random.and.returnValue(0.2);

                var cell = instance.createNewCell();

                expect(cell.bomb).toBeFalsy();
            });
        });

        describe('checkForLoss', function () {
            it('should be falsy if the cell has no bomb', function () {
                var input = {};

                expect(instance.checkForLoss(input)).toBeFalsy();
            });

            it('should be truthy if the cell has a bomb', function () {
                var input = {bomb: true};

                expect(instance.checkForLoss(input)).toBeTruthy();
            });
        });
    });
});
