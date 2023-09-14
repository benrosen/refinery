import { v4 as createUuid } from "uuid";
import { Component } from "./component";
import { Graphical } from "./graphical";
import { Graphics } from "./graphics";

export class GraphicalComponent extends Component<Graphical> {
  public static readonly type = "graphical";

  constructor(entityId: string, id: string = createUuid()) {
    super(
      GraphicalComponent.type,
      entityId,
      {
        isGraphical: true,
      },
      id,
    );

    Graphics.createEntity(entityId);
  }
}
