import { v4 as createUuid } from "uuid";
import { Component } from "./component";
import { Physical } from "./physical";
import { Physics } from "./physics";

export class PhysicalComponent extends Component<Physical> {
  public static readonly type = "physical";

  constructor(entityId: string, id: string = createUuid()) {
    super(
      PhysicalComponent.type,
      entityId,
      {
        isPhysical: true,
      },
      id,
    );

    Physics.createEntity(entityId);
  }
}
