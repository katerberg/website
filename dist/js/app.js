(function () {
'use strict';

    var katerbergApp = angular.module('katerbergApp', [
        'ngRoute'
    ]);

    katerbergApp.config(["$routeProvider", function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
          }).
          when('/about-me', {
            templateUrl: 'partials/about-me.html',
            controller: 'AboutMeCtrl'
          }).
          when('/minesweeper', {
            templateUrl: 'partials/minesweeper.html',
            controller: 'MinesweeperCtrl'
          }).
          when('/web-dev', {
            templateUrl: 'partials/web-dev.html',
            controller: 'WebDevCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);
})();

(function () {
    'use strict';

    angular.module('katerbergApp').controller('AboutMeCtrl', ["$scope", function($scope) {
    }]);
})();

(function () {
    'use strict';

    angular.module('katerbergApp').controller('MinesweeperCtrl', ["$scope", "minesweeperService", function($scope, minesweeperService) {
        function resetBoard(gridSize) {
            $scope.rows = [];
            $scope.numberOfFlags = 0;
            for (var i = 0; i < gridSize; i++) {
                $scope.rows.add({'cells': []});
                for (var j = 0; j < gridSize; j++) {
                    var cell = minesweeperService.createNewCell();
                    cell.rowNumber = i;
                    cell.columnNumber = j;
                    if (cell.bomb) {
                        $scope.numberOfFlags++;
                    }
                    
                    $scope.rows[i].cells.add(cell);
                }
            }
        }

        function getNumberOfUnclearedCells() {
            var unclearedCells = 0;
            $scope.rows.forEach(function (row) {
                row.cells.forEach(function (cell) {
                    if (!cell.selected) {
                        unclearedCells++;
                    }
                });
            });
            return unclearedCells;
        }
        
        function calculateBombsNearby(cell) {
            var bombs = 0;
            var isLeft = cell.columnNumber === 0;
            var isRight = cell.columnNumber === $scope.rows[0].cells.length - 1;
            var isBottom = cell.rowNumber === $scope.rows.length - 1;
            var isTop = cell.rowNumber === 0;
            if (!isTop) {
                if ($scope.rows[cell.rowNumber - 1].cells[cell.columnNumber].bomb) {
                    bombs++;
                }
                if (!isLeft) {
                    if ($scope.rows[cell.rowNumber - 1].cells[cell.columnNumber - 1].bomb) {
                        bombs++;
                    }
                }
                if (!isRight) {
                    if ($scope.rows[cell.rowNumber - 1].cells[cell.columnNumber + 1].bomb) {
                        bombs++;
                    }
                }
            }
            if (!isBottom) {
                if ($scope.rows[cell.rowNumber + 1].cells[cell.columnNumber].bomb) {
                    bombs++;
                }
                if (!isLeft) {
                    if ($scope.rows[cell.rowNumber + 1].cells[cell.columnNumber - 1].bomb) {
                        bombs++;
                    }
                }
                if (!isRight) {
                    if ($scope.rows[cell.rowNumber + 1].cells[cell.columnNumber + 1].bomb) {
                        bombs++;
                    }
                }
            }

            if (!isLeft) {
                if ($scope.rows[cell.rowNumber].cells[cell.columnNumber - 1].bomb) {
                    bombs++;
                }
            }
            if (!isRight) {
                if ($scope.rows[cell.rowNumber].cells[cell.columnNumber + 1].bomb) {
                    bombs++;
                }
            }
            return bombs;
        }

        function resetGame() {
            $scope.hasWon = false;
            $scope.hasLost = false;
            $scope.resetBoard(15);
        }

        function selectCell(cell) {
            if ($scope.hasWon || $scope.hasLost) {
                return;
            }
            cell.selected = true;
            cell.bombsNearby = calculateBombsNearby(cell);
            $scope.hasLost = minesweeperService.checkForLoss(cell);
            $scope.hasWon = minesweeperService.checkForWin($scope.rows);
            if ($scope.hasWon) {
                alert('You win!');
            }
        }

        $scope.selectCell = selectCell;
        $scope.resetGame = resetGame;
        $scope.getNumberOfUnclearedCells = getNumberOfUnclearedCells;
        $scope.resetBoard = resetBoard;
        resetGame();
    }]);
})();

(function () {
    angular.module('katerbergApp').factory('minesweeperService', function() {

        function createNewCell() {
            var newCell = {'selected': false};
            if (Math.random() < 0.2){
                newCell.bomb = true;
            }
            return newCell;
        }

        function checkForLoss(cell) {
            return cell.bomb;
        }

        function checkForWin(board) {
            return board.every(function (row) {
                return row.cells.every(function (cell) {
                    if (!cell.selected && !cell.bomb) {
                        return false;
                    }
                    return true;
                });
            });
        }
        
        return {
            createNewCell: createNewCell,
            checkForLoss: checkForLoss,
            checkForWin: checkForWin
        };
    });
})();

(function () {
    'use strict';

    angular.module('katerbergApp').controller('HomeCtrl', ["$scope", function($scope) {
    }]);
})();

(function () {
    'use strict';

    angular.module('katerbergApp').controller('WebDevCtrl', ["$scope", "$location", function($scope, $location) {
        function goMinesweeper() {
            $location.path('minesweeper');
        }

        $scope.goMinesweeper = goMinesweeper;
    }]);
})();

(function () {
    'use strict';

    angular.module('katerbergApp').controller('SidebarCtrl', ["$scope", "$location", function($scope, $location) {
        function goHome() {
            $location.path('home');
        }

        function goWebDev() {
            $location.path('web-dev');
        }

        function goAboutMe() {
            $location.path('about-me');
        }

        $scope.goAboutMe = goAboutMe;
        $scope.goHome = goHome;
        $scope.goWebDev = goWebDev;
    }]);
})();
