import prompt from "../helpers/prompt.js";

export default class Player {
  name: string;
  color: "X" | "O";
  constructor(name: string, color: "X" | "O") {
    this.name = name;
    this.color = color;
  }
  makeMove(): number {
    let move = NaN;
    while (isNaN(move)) {
      move = +prompt(`${this.name} (${this.color}), det är din tur! - Skriv in en column för att lägga din bricka på: `);
    }
    return move;
  }
}
