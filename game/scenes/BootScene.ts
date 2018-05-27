import { Scene } from "phaser";
import ProgressBar from "../utils/ProgressBar";

export default class BootScene extends Scene {
  public progressBar: ProgressBar;
  constructor() {
    super({ key: "BootScene" });
  }

  public init() { }

  public preload() {
    this.progressBar = new ProgressBar(this, 0, 0);

    this.load.image("sky", "sky.png");
    this.load.image("stone", "lands/stone.png");
    this.load.image("wheat", "lands/wheat.png");
    this.load.image("wood", "lands/wood.png");
    this.load.image("brick", "lands/brick.png");
    this.load.image("house", "house.png");
  }

  public create() {
    this.scene.start("PlayScene");
  }
}
