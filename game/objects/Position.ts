export default class Position {

  public x: number;
  public y: number;

  constructor(x: integer, y: integer) {
    this.x = x;
    this.y = y;
  }

  public distanceFromCenter(): integer {
    const [x, y, diff] = [Math.abs(this.x), Math.abs(this.y), Math.abs(this.x - this.y)];

    return Math.max(x, y, diff);
  }
}
