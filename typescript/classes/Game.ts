import Player from './Player.js';
import Ai from './Ai.js';
import Board from './Board.js';
import prompt from '../helpers/prompt.js';

export default class Game {
  player1?: Player | Ai;
  player2?: Player | Ai;
  currentPlayer?: Player | Ai;
  board: Board;
  constructor() {
    this.board = new Board();
    this.chooseOpponent();
    this.startGame();
    this.gameOverScreen();
  }

  // Choose opponent to play against
  chooseOpponent() {
    while (true) {
      console.log('Vad vill du spela emot?');
      console.log('1. Spelare mot spelare');
      console.log('2. Spelare mot AI');
      console.log('3. AI mot AI');
      const choice = prompt();

      switch (choice) {
        case '1':
          this.createPlayers('player', 'player');
          return;
        case '2':
          this.createPlayers('player', 'ai');
          return;
        case '3':
          this.createPlayers('ai', 'ai');
          return;
        default:
          console.log('Skriv in ett giltigt alternativ :)');
      }
    }
  }

  // Create players and assign who makes the first move
  createPlayers(player1Type: 'player' | 'ai', player2Type: 'player' | 'ai') {
    console.clear();
    this.player1 = player1Type === 'player' ? new Player(prompt("Skriv in spelare 1's namn: "), 'X') : new Ai('X');
    this.player2 = player2Type === 'player' ? new Player(prompt("Skriv in spelare 2's namn: "), 'O') : new Ai('O');

    this.currentPlayer = this.player1;
  }
  // Start game
  startGame() {
    while (!this.board.gameOver) {
      console.clear();
      this.board.render();

      let move: number = this.currentPlayer!.makeMove();

      // If we make a valid move, the currentPlayer is getting switched. And we check if the game is still in play.
      if (this.board.placeMove(this.currentPlayer!, move) && !this.board.gameOver) {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
      }
    }
  }
  // Game over screen
  gameOverScreen() {
    console.clear();
    this.board.render();
    if (this.board.winner) {
      console.log(
        `WINNER! WINNER! CHICKEN DINNER! ${this.currentPlayer!.name} är vinnaren (${this.currentPlayer!.color})`
      );
    } else {
      console.log('Det vart oavgjort! Ingen vann!');
    }
  }
}
