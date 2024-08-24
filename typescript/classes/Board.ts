import Player from "./Player.js";
export default class Board {
  matrix: string[][];
  winner: boolean | Player;
  gameOver: boolean | Player;
  constructor() {
    this.matrix = this.makeMatrix();

    this.winner = false;
    this.gameOver = false;
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

  // | _ | _ | _ | _ | _ | _ | _ |
  // | _ | _ | _ | _ | _ | _ | _ |
  // | _ | _ | _ | _ | _ | _ | _ |
  // | _ | _ | _ | _ | _ | _ | _ |
  // | _ | _ | _ | _ | _ | _ | _ |
  // | _ | _ | _ | _ | _ | _ | _ |
  render = () => {
    console.clear();
    console.log(this.matrix.map((row) => "| " + row.map((column) => `${column === "" ? "_" : column}`).join(" | ") + " |").join("\n"));
  };

  makeMove(player: Player, column: number): boolean {
    // When a player makes a move, the piece should fall to the lowest row in that column.
    // Error handeling:
    // If the game is still in play, no need to keep playing if the game is over.
    if (this.gameOver) return false;

    // If the move is inside the board.
    if (column < 0 || column >= this.matrix[0].length) return false;

    // If the column is full, you can't place a piece there.
    if (this.matrix[0][column] !== "") return false;

    for (let row = 0; row < this.matrix.length; row++) {
      if (this.matrix[row][column] === "") {
        if (row === this.matrix.length - 1 || this.matrix[row + 1][column] !== "") {
          //Place the piece in the avalible spot
          this.matrix[row][column] = player.color;

          // Check if there is a winner
          this.winner = this.checkIfWinner(player);
          // Game Over if there is a winner
          this.gameOver = this.winner;
        }
      }
    }
    return true;
  }
  checkIfWinner(player: Player): boolean | Player {
    // Vertical
    for (let row = 0; row < this.matrix.length - 3; row++) {
      for (let col = 0; col < this.matrix[0].length; col++) {
        if (
          this.matrix[row][col] === player.color &&
          this.matrix[row + 1][col] === player.color &&
          this.matrix[row + 2][col] === player.color &&
          this.matrix[row + 3][col] === player.color
        ) {
          console.log(`WINNER! WINNER! CHICKEN DINNER!(VERTICAL, ${player.name} is the winner: ${player.color})`);
          return player;
        }
      }
    }

    // Horizontal
    for (let col = 0; col < this.matrix[0].length - 3; col++) {
      for (let row = 0; row < this.matrix.length; row++) {
        if (
          this.matrix[row][col] === player.color &&
          this.matrix[row][col + 1] === player.color &&
          this.matrix[row][col + 2] === player.color &&
          this.matrix[row][col + 3] === player.color
        ) {
          console.log(`WINNER! WINNER! CHICKEN DINNER!(HORIZONTAL, ${player.name} is the winner: ${player.color})`);
          return player;
        }
      }
    }

    // Ascending Diagonal

    // Descending Diagonal
    return false;
  }
}
