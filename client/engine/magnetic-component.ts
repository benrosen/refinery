import { Component } from "./component";
import { Magnetic } from "./magnetic";

export class MagneticComponent extends Component<Magnetic> {
  public static readonly type = "magnetic";

  constructor(entityId: string, polarity: number) {
    super(MagneticComponent.type, entityId, {
      isMagnetic: true,
      polarity,
    });
  }

  public get polarity(): number {
    return this.value.polarity;
  }

  public set polarity(polarity: number) {
    this.value.polarity = polarity;
  }

  public readonly onPolarityChanged = (
    callback: (polarity: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.polarity === value.nextValue.polarity) {
        return;
      }

      callback({
        previousValue: value.previousValue.polarity,
        nextValue: value.nextValue.polarity,
      });
    });
  };
}
