import * as CANNON from "cannon-es";

export class Physics {
  public static readonly world = new CANNON.World();

  public static update = (delta: number) => {
    this.world.step(1 / 60, delta);
  };
}
