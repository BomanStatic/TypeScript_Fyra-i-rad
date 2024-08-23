import Player from "./Player.js";
export default class Board {
  matrix: string[][];
  constructor() {
    this.matrix = this.makeMatrix();
  }

  // default for connect 4 is 6x7
  makeMatrix(rows: number = 6, cols: number = 7) {
    let matrix: string[][] = [];
    for (let i = 0; i < rows; i++) {
      // add an empty array for each row
      matrix.push([]);
      for (let j = 0; j < cols; j++) {
        // add an empty string for each column
        matrix[i].push("");
      }
    }
    return matrix;
  }

  render = () => {
    console.log(this.matrix);
  };

  makeMove(player: Player, column: number):boolean {
    // When a player makes a move, the piece should fall to the lowest row in that column.
    // Error handeling:
    // If the move is inside the board in both directions row and column. ex row 10 invalid, column -5 invalid.
    // If the game is still in play, no need to keep playing if the game is over.
    // If the column is full, you can't place a piece there.

    for (let row = 0; row < this.matrix.length; row++) {
      if (this.matrix[row][column] === "") {
        if (row === this.matrix.length - 1 || this.matrix[row + 1][column] !== "") {
          this.matrix[row][column] = player.color;
        }
      }
    }
    // if(this.matrix[])
    return true;
  }
}
