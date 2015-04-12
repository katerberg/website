(function() {
    angular.module('katerbergApp').factory('minesweeperService', function() {

        function createNewCell() {
            var newCell = {
                'selected': false
            };
            if (Math.random() < 0.2) {
                newCell.bomb = true;
            }
            return newCell;
        }

        function checkForLoss(cell) {
            return cell.bomb;
        }

        function checkForWin(board) {
            return board.every(function(row) {
                return row.cells.every(function(cell) {
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
