describe('SidebarCtrl', function () {

    var scope,
        location,
        rootScope;


    beforeEach(function () {
        module('katerbergApp');
    });

    describe('After start up', function () {
        var location;

        beforeEach(inject(function($controller, $rootScope, $location) {
            location = $location;
            spyOn(location, 'path');

            scope = $rootScope.$new();
            $controller('SidebarCtrl', {$scope: scope});
            scope.$digest();

            rootScope = $rootScope;
        }));

        it('should be defined', function () {
            expect(scope).toBeDefined();
        });

        describe('goHome', function () {
            it('should go to home page', function () {

                scope.goHome();

                expect(location.path).toHaveBeenCalledWith('home');
            });
        });

        describe('goWebDev', function () {
            it('should go to webdev page', function () {

                scope.goWebDev();

                expect(location.path).toHaveBeenCalledWith('web-dev');
            });
        });

        describe('goAboutMe', function () {
            it('should go to about me page', function () {

                scope.goAboutMe();

                expect(location.path).toHaveBeenCalledWith('about-me');
            });
        });
        describe('goMtg', function () {
            it('should go to mtg page', function () {

                scope.goMtg();

                expect(location.path).toHaveBeenCalledWith('mtg');
            });
        });
    });
});
