import Board from "./Board";
import Position from "./Position";

export default class Land extends Phaser.GameObjects.Sprite {

  static get TYPES() {
    return ["brick", "stone", "wood", "wheat"];
  }

  public static random(): string {
    return Land.TYPES[Math.floor(Math.random() * Land.TYPES.length)];
  }

  public position: Position;
  public sides: string[];
  public board: Board;

  constructor(board: Board, type: string, position: Position) {
    const x = (board.scene.cameras.main.width / 2) + (position.x * 80) - (position.x * 20);
    const y = (board.scene.cameras.main.height / 2) - (position.y * 80) + (position.x * 40);

    super(board.scene, x, y, type);

    this.board = board;
    this.position = position;
    this.type = type;
    this.sides = ["N", "NE", "SE", "S", "SW", "NW"];

    this.addToScene();
  }

  // public click(pointer, object) {
  //   console.log(pointer, object);
  // }

  public addToScene() {
    this.board.scene.add.existing(this);
    this.board.scene.add.text(this.x - 25, this.y, this.position.x + "," + this.position.y);

    this.setInteractive();
    this.on("pointerdown", this.click);
  }

  public positionFor(direction: string): Position {
    let position = new Position(0, 0);

    if (direction === "N") {
      position = new Position(this.position.x, this.position.y + 1);
    }

    if (direction === "NE") {
      position = new Position(this.position.x + 1, this.position.y + 1);
    }

    if (direction === "SE") {
      position = new Position(this.position.x + 1, this.position.y);
    }

    if (direction === "S") {
      position = new Position(this.position.x, this.position.y - 1);
    }

    if (direction === "SW") {
      position = new Position(this.position.x - 1, this.position.y - 1);
    }

    if (direction === "NW") {
      position = new Position(this.position.x - 1, this.position.y);
    }

    return position;
  }

  private click(pointer: PointerEvent) {
    console.log(this.type);
  }
}
