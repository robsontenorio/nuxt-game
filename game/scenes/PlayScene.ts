import { Scene } from "phaser";
import Board from "../objects/Board";

export default class PlayScene extends Scene {

  public cursors: CursorKeys;
  public board: Board;

  constructor() {
    super({
      key: "PlayScene",
    });
  }

  public init() { }

  public create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    // scenario
    this.add.image(400, 300, "sky");

    // board
    this.board = new Board(this, 3);
    console.log(this.board);

    // elements
    // this.bomb = new Bomb(this, 200, 300)

    // this.player = new Player(this, 50, 60)
    // this.player.setControls(this.cursors)
  }

  public update() {
    // this.player.update()
  }
}
