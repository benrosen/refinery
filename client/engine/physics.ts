import * as CANNON from "cannon-es";
import { v4 as createUuid } from "uuid";
import { Physical } from "./physical";
import { PhysicalComponent } from "./physical-component";
import { System } from "./system";

export class Physics {
  public static readonly world = new CANNON.World();

  public static readonly getEntityById = (
    entityId: string,
  ): CANNON.Body | undefined => {
    throw new Error("Not implemented");
  };

  public static readonly createEntity = (
    entityId: string = createUuid(),
  ): CANNON.Body => {
    throw new Error("Not implemented");
  };

  public static readonly deleteEntity = (entityId: string): void => {
    throw new Error("Not implemented");
  };

  public static readonly update = (delta: number) => {
    this.world.step(1 / 60, delta);
  };

  static {
    new System<Physical>(
      PhysicalComponent.type,
      undefined,
      (components) => {
        components.forEach((component) => {
          Physics.createEntity(component.entityId);
        });
      },
      (components) => {
        components.forEach((component) => {
          Physics.deleteEntity(component.entityId);
        });
      },
    );
  }
}
