import * as CANNON from "cannon-es";

export class Physics {
  public static readonly world = new CANNON.World();

  public static readonly getEntityById = (
    entityId: string,
  ): CANNON.Body | undefined => {
    throw new Error("Not implemented");
  };

  public static readonly update = (delta: number) => {
    this.world.step(1 / 60, delta);
  };
}
