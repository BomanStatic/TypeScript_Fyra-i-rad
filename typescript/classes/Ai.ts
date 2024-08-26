import delay from "../helpers/delay.js";

export default class Ai {
  name: string;
  color: "X" | "O";
  constructor(color: "X" | "O") {
    this.name = "Boten Anna";
    this.color = color;
  }
  makeMove(): number {
    const move: number = Math.round(Math.random() * 6);
    console.log(`${this.name} spelade kolumn ${move}!`);
    delay(1000);
    return move;
  }
}
