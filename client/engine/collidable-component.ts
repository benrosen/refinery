import { Collidable } from "./collidable";
import { Component } from "./component";

export class CollidableComponent extends Component<Collidable> {
  public static readonly type = "collidable";

  public readonly isCollidable = true;

  constructor(entityId: string) {
    super(CollidableComponent.type, entityId, {
      isCollidable: true,
    });
  }
}
