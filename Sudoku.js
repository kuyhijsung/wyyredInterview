// Using any language you like, write a
// function that takes as an input a standard sudoku board(i.e.a 9 x9 grid of numbers, represented however you like), and returns a boolean indicating whether the board is valid or not.
// A board is valid if: 
// A: each row contains all numbers between 1 and 9 inclusive.
// B: each column contains all numbers between 1 and 9 inclusive.
// C: The nine 3 x3 squares each contain all numbers between 1 and 9 inclusive.

const sudokuValidator = (board) => {
    //Validation for the rows of Sudoku. 
    for (let i = 0; i < board.length; i++) {
        const row = new Set(); //Checking for duplicates in the row using a Set.
        for (let j = 0; j < board.length; j++) {
            const numPiece = board[i][j];
            if (numPiece === "x") { //If the cell on the board has nothing on it, displayed as the string "x".
                continue;
            };
            if (row.has(numPiece)) {
                return false;
            };
            row.add(numPiece); //If first encounter in the row, add to the Set. 
        }
    }
    //Validation for the columns of Sudoku.
    for (let i = 0; i < board.length; i++) {
        const col = new Set(); //Checking for duplicates in the column using a Set.
        for (let j = 0; j < board[i].length; j++) {
            const numPiece = board[j][i];
            if (numPiece === "x") { //If the cell on the board has nothing on it, displayed as the string "x".
                continue;
            };
            if (col.has(numPiece)) {
                return false;
            };
            col.add(numPiece); //If first in the column, add to the Set.
        }
    }
    //Validation for the subgrids within the whole board itself. Broken up into 3 subgrid segments. 
    for (let i = 0; i < 3; i++) { //For loop for the row of the board.
        for (let j = 0; j < 3; j++) { //For loop for the column of the board.
            const subGrid = new Set(); //Checking for duplicates in the subgrid using a Set.
            for (let k = 0; k < 3; k++) { //For loop for the row of the subgrids. 
                for (let l = 0; l < 3; l++) { //For loop for the column of the subgrids.
                    const numPiece = board[3 * i + k][3 * j + l]; //3 is the starting value initialized, as the whole subgrids are split up into 3s. The subgrids within itself are also split into 3s.
                    if (numPiece === "x") { //If the cell on the board has nothing on it, displayed as the string "x".
                        continue;
                    };
                    if (subGrid.has(numPiece)) {
                        return false;
                    };
                    subGrid.add(numPiece); //If first encounter within the subgrid, add to the Set.
                }
            }
        }
    }
    return true; //If it all passes, then the Sudoku board has been validated. 
}