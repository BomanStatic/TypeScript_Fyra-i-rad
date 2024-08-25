import Player from "./Player.js";
import prompt from "../helpers/prompt.js";
import Board from "./Board.js";

export default class Game {
  player1?: Player;
  player2?: Player;
  currentPlayer?: Player;
  board: Board;
  constructor() {
    this.createPlayers();
    this.board = new Board();
    this.startGame();
    this.gameOverScreen();
  }

  // Create players and assign who makes the first move
  createPlayers() {
    console.clear();
    this.player1 = new Player(prompt("Skriv in spelare 1's namn: "), "X");
    this.player2 = new Player(prompt("Skriv in spelare 2's namn: "), "O");

    this.currentPlayer = this.player1;
  }
  // Start game
  startGame() {
    while (!this.board.gameOver) {
      console.clear();
      this.board.render();

      const move = prompt(
        `${this.currentPlayer?.name} (${this.currentPlayer?.color}), det är din tur! - Skriv in en column för att lägga din bricka på: `
      );
      // If we make a valid move, the currentPlayer is getting switched. And we check if the game is still in play.
      if (this.board.makeMove(this.currentPlayer!, move) && !this.board.gameOver) {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
      }
    }
  }
  // Game over screen
  gameOverScreen() {
    console.clear();
    this.board.render();
    if (this.board.winner) {
      console.log(`WINNER! WINNER! CHICKEN DINNER! ${this.currentPlayer!.name} is the winner (${this.currentPlayer!.color})`);
    }
  }
}
