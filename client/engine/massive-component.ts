import { Component } from "./component";
import { Massive } from "./massive";

export class MassiveComponent extends Component<Massive> {
  public static readonly type = "massive";

  constructor(entityId: string, mass: number) {
    super(MassiveComponent.type, entityId, {
      isMassive: true,
      mass,
    });
  }

  public get mass(): number {
    return this.value.mass;
  }

  public set mass(mass: number) {
    this.value.mass = mass;
  }

  public readonly onMassChanged = (
    callback: (mass: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.mass === value.nextValue.mass) {
        return;
      }

      callback({
        previousValue: value.previousValue.mass,
        nextValue: value.nextValue.mass,
      });
    });
  };
}
