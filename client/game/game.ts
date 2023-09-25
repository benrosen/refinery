import { Engine } from "../engine";

export class Game {
  protected readonly engine = new Engine();

  constructor() {
    this.engine.start();

    this.engine.log("👋 Welcome to the game!");
  }
}
