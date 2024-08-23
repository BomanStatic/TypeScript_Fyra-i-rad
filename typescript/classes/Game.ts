import Player from "./Player.js";
import prompt from "../helpers/prompt.js";

export default class Game {
  player1?: Player;
  player2?: Player;
  constructor() {
    this.createPlayers();
  }

  // Create players
  createPlayers() {
    console.clear();
    this.player1 = new Player(prompt("Skriv in spelare 1's namn: "), "X");
    this.player2 = new Player(prompt("Skriv in spelare 2's namn: "), "O");
  }
  // Start game
  // Game over screen
}
