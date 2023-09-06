import { Component } from "./component";
import { Solid } from "./solid";

export class SolidComponent extends Component<Solid> {
  public static readonly type = "solid";

  constructor(entityId: string, bounciness: number, friction: number) {
    super(SolidComponent.type, entityId, {
      isSolid: true,
      bounciness,
      friction,
    });
  }

  public get bounciness(): number {
    return this.value.bounciness;
  }

  public set bounciness(bounciness: number) {
    this.value.bounciness = bounciness;
  }

  public get friction(): number {
    return this.value.friction;
  }

  public set friction(friction: number) {
    this.value.friction = friction;
  }

  public readonly onBouncinessChanged = (
    callback: (bounciness: {
      previousValue: number;
      nextValue: number;
    }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.bounciness === value.nextValue.bounciness) {
        return;
      }

      callback({
        previousValue: value.previousValue.bounciness,
        nextValue: value.nextValue.bounciness,
      });
    });
  };

  public readonly onFrictionChanged = (
    callback: (friction: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.friction === value.nextValue.friction) {
        return;
      }

      callback({
        previousValue: value.previousValue.friction,
        nextValue: value.nextValue.friction,
      });
    });
  };
}
