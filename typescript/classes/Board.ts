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
}
