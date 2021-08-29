const first = 'x';
const second = 'o';
const next = {
    [first]: second,
    [second]: first
}

class TicTacToe {
    constructor() {
        this.currentPlayer = first;
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] != null) {return;}
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = next[this.currentPlayer];
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        let row = this.gameField.findIndex(el => el.every(p => p === el[0]))
        if (row >= 0) return this.gameField[row][0];

        let col = this.gameField.map((_,index) => this.gameField.map((row) => row[index]))
        .findIndex(el => el.every(p => p === el[0]))
        if (col >= 0) return this.gameField[0][col];

        let diagLeft = this.gameField[0][0];
        let count = 0;
        for (let i = 0; i < this.gameField.length; i++) {
            if (this.gameField[i][i] === diagLeft) count++; 
          }
        if (count === this.gameField.length) return diagLeft;

        let diagRight = this.gameField[0][2];
        count = 0;
        for (let i = 2; i >= 0; i--) {
            if (this.gameField[2-i][i] === diagRight) count++; 
          }
        if (count === this.gameField.length) return diagRight;

        return null;
    }
    
    

    noMoreTurns() {
        return this.gameField.every( (element) => element.every(col => col))
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner() ) ? true : false
    }

    getFieldValue(rowIndex, colIndex) {
        if ((rowIndex < this.gameField.length) && (colIndex < this.gameField.length)) {
            return this.gameField[rowIndex][colIndex]
        }
        
    }
}


module.exports = TicTacToe;
