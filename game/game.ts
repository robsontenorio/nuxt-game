
import { Game } from "phaser";
import BootScene from "./scenes/BootScene";
import PlayScene from "./scenes/PlayScene";

const config: GameConfig = {
  height: 600,
  parent: "game-container",
  physics: {
    arcade: {
      debug: false,
      gravity: { y: 300 },
    },
    default: "arcade",
  },
  scene: [BootScene, PlayScene],
  type: Phaser.AUTO,
  width: 800,
};

export default class Catan {
  public static game: Game;

  public static start() {
    this.game = new Game(config);
  }
}
