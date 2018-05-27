import { Scene } from "phaser";

export default class ProgressBar {
  public scene: Scene;
  public x: number;
  public y: number;
  public progressBar: any;

  constructor(scene: Scene, x: integer, y: integer) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.addToScene();
  }

  public addToScene() {
    this.progressBar = this.scene.add.graphics();

    // calc center
    let { width: x, height: y } = this.scene.sys.game.config;
    x = (x / 2) - 150;
    y = (y / 2) - 15;

    this.scene.load.on("progress", (value: number) => {
      this.progressBar.clear();
      this.progressBar.fillStyle(0xffffff, 1);
      this.progressBar.fillRect(x, y, 300 * value, 30);
    });

    // this.scene.load.on("fileprogress", function (file) {
    //   // console.log(file.src)
    // });

    this.scene.load.on("complete", () => {
      this.progressBar.destroy();
    });
  }
}
