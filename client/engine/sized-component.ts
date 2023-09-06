import { Component } from "./component";
import { Sized } from "./sized";

export class SizedComponent extends Component<Sized> {
  public static readonly type = "sized";

  constructor(entityId: string, width: number, height: number, depth: number) {
    super(SizedComponent.type, entityId, {
      isSized: true,
      width,
      height,
      depth,
    });
  }

  public static get instances(): SizedComponent[] {
    return Component.getByType(SizedComponent.type) as SizedComponent[];
  }

  public get width(): number {
    return this.value.width;
  }

  public set width(width: number) {
    this.value.width = width;
  }

  public get height(): number {
    return this.value.height;
  }

  public set height(height: number) {
    this.value.height = height;
  }

  public get depth(): number {
    return this.value.depth;
  }

  public set depth(depth: number) {
    this.value.depth = depth;
  }

  public readonly onSizeChanged = (
    callback: (size: {
      previousValue: { width: number; height: number; depth: number };
      nextValue: { width: number; height: number; depth: number };
    }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (
        value.previousValue.width === value.nextValue.width &&
        value.previousValue.height === value.nextValue.height &&
        value.previousValue.depth === value.nextValue.depth
      ) {
        return;
      }

      callback({
        previousValue: {
          width: value.previousValue.width,
          height: value.previousValue.height,
          depth: value.previousValue.depth,
        },
        nextValue: {
          width: value.nextValue.width,
          height: value.nextValue.height,
          depth: value.nextValue.depth,
        },
      });
    });
  };

  public readonly onWidthChanged = (
    callback: (width: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.width === value.nextValue.width) {
        return;
      }

      callback({
        previousValue: value.previousValue.width,
        nextValue: value.nextValue.width,
      });
    });
  };

  public readonly onHeightChanged = (
    callback: (height: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.height === value.nextValue.height) {
        return;
      }

      callback({
        previousValue: value.previousValue.height,
        nextValue: value.nextValue.height,
      });
    });
  };

  public readonly onDepthChanged = (
    callback: (depth: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.depth === value.nextValue.depth) {
        return;
      }

      callback({
        previousValue: value.previousValue.depth,
        nextValue: value.nextValue.depth,
      });
    });
  };
}
