import { randomUUID } from "crypto";
import { Component } from "./component";
import { Physical } from "./physical";
import { Physics } from "./physics";

export class PhysicalComponent extends Component<Physical> {
  public static readonly type = "physical";

  constructor(entityId: string, id: string = randomUUID()) {
    super(
      PhysicalComponent.type,
      entityId,
      {
        isPhysical: true,
      },
      id,
      () => {
        Physics.deleteEntity(entityId);
      },
    );

    Physics.createEntity(entityId);
  }
}
