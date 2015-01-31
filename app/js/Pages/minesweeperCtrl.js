(function () {
    'use strict';

    angular.module('katerbergApp').controller('MinesweeperCtrl', function($scope, minesweeperService) {
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
    });
})();
