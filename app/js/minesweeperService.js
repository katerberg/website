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
        
        return {
            createNewCell: createNewCell,
            checkForLoss: checkForLoss
        };
    });
})();
