import { Component } from "./component";
import { Gravitational } from "./gravitational";

export class GravitationalComponent extends Component<Gravitational> {
  public static readonly type = "gravitational";

  constructor(entityId: string) {
    super(GravitationalComponent.type, entityId, {
      isGravitational: true,
    });
  }
}
