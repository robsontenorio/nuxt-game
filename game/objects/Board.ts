import { Scene } from "phaser";
import Building from "./Building";
import Land from "./Land";
import Position from "./Position";

export default class Board {

  public buildings: Phaser.GameObjects.Group;
  public lands: Phaser.GameObjects.Group;
  public scene: Scene;
  public size: number;

  constructor(scene: Scene, size: integer) {
    this.size = size;
    this.scene = scene;
    this.lands = this.scene.add.group();
    this.buildings = this.scene.add.group();

    this.build();
  }

  public build() {
    const land = new Land(this, Land.random(), new Position(0, 0));

    this.lands.add(land);

    this.buildAround(land);

    const building = new Building(land, "house", "a");
    this.buildings.add(building);
  }

  public hasLand(position: Position): boolean {
    const lands = this.lands
      .getChildren()
      .find((land: Land) => land.position.x === position.x && land.position.y === position.y);

    return (lands === undefined) ? false : true;
  }

  public buildAround(land: Land) {
    land.sides.forEach((side) => {
      const position = land.positionFor(side);
      if (!this.hasLand(position)) {
        if (position.distanceFromCenter() < this.size) {
          const newLand = new Land(this, Land.random(), position);
          this.lands.add(newLand);
          this.buildAround(newLand);
        }
      }
    });

  }
}
