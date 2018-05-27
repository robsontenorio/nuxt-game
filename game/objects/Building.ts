import Land from "./Land";

export default class Building extends Phaser.GameObjects.Sprite {

  public land: Land;

  static get TYPES() {
    return ["house"];
  }

  constructor(land: Land, type: string, vertice: string) {
    super(land.board.scene, 100, 100, type);

    this.land = land;
    this.addToScene();
  }

  public addToScene() {
    this.land.board.scene.add.existing(this);
    this.setInteractive();
    this.land.board.scene.input.setDraggable(this);

    this.land.board.scene.input.on("drag", this.drag);
    this.land.board.scene.input.on("dragend", this.dragEnd);
  }

  private drag(pointer: any, gameObject: Building, dragX: number, dragY: number) {
    gameObject.x = dragX;
    gameObject.y = dragY;
  }
  private dragEnd(pointer: any, gameObject: Building, dragX: number, dragY: number) {
    console.log(gameObject);
  }
}
