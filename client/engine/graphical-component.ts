import { randomUUID } from "crypto";
import { Component } from "./component";
import { Graphical } from "./graphical";
import { Graphics } from "./graphics";

export class GraphicalComponent extends Component<Graphical> {
  public static readonly type = "graphical";

  constructor(entityId: string, id: string = randomUUID()) {
    super(
      GraphicalComponent.type,
      entityId,
      {
        isGraphical: true,
      },
      id,
      () => {
        Graphics.deleteEntity(entityId);
      },
    );

    Graphics.createEntity(entityId);
  }
}
