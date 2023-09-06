import { Component } from "./component";
import { Positioned } from "./positioned";

export class PositionedComponent extends Component<Positioned> {
  public static readonly type = "positioned";

  constructor(entityId: string, x: number, y: number, z: number) {
    super(PositionedComponent.type, entityId, {
      isPositioned: true,
      x,
      y,
      z,
    });
  }

  public static get instances(): PositionedComponent[] {
    return Component.getByType(
      PositionedComponent.type,
    ) as PositionedComponent[];
  }

  public get x(): number {
    return this.value.x;
  }

  public set x(x: number) {
    this.value.x = x;
  }

  public get y(): number {
    return this.value.y;
  }

  public set y(y: number) {
    this.value.y = y;
  }

  public get z(): number {
    return this.value.z;
  }

  public set z(z: number) {
    this.value.z = z;
  }

  public readonly onPositionChanged = (
    callback: (position: {
      previousValue: { x: number; y: number; z: number };
      nextValue: { x: number; y: number; z: number };
    }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (
        value.previousValue.x === value.nextValue.x &&
        value.previousValue.y === value.nextValue.y &&
        value.previousValue.z === value.nextValue.z
      ) {
        return;
      }

      callback({
        previousValue: {
          x: value.previousValue.x,
          y: value.previousValue.y,
          z: value.previousValue.z,
        },
        nextValue: {
          x: value.nextValue.x,
          y: value.nextValue.y,
          z: value.nextValue.z,
        },
      });
    });
  };

  public readonly onXChanged = (
    callback: (x: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.x === value.nextValue.x) {
        return;
      }

      callback({
        previousValue: value.previousValue.x,
        nextValue: value.nextValue.x,
      });
    });
  };

  public readonly onYChanged = (
    callback: (y: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.y === value.nextValue.y) {
        return;
      }

      callback({
        previousValue: value.previousValue.y,
        nextValue: value.nextValue.y,
      });
    });
  };

  public readonly onZChanged = (
    callback: (z: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.z === value.nextValue.z) {
        return;
      }

      callback({
        previousValue: value.previousValue.z,
        nextValue: value.nextValue.z,
      });
    });
  };
}
