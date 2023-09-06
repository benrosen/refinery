import { Component } from "./component";
import { Rendered } from "./rendered";

export class RenderedComponent extends Component<Rendered> {
  public static readonly type = "rendered";

  constructor(
    entityId: string,
    color: string,
    transparency: number,
    glow: number,
    smoothness: number,
    isMetallic: boolean,
  ) {
    super(RenderedComponent.type, entityId, {
      isRendered: true,
      color,
      transparency,
      glow,
      smoothness,
      isMetallic,
    });
  }

  public static get instances(): RenderedComponent[] {
    return Component.getByType(RenderedComponent.type) as RenderedComponent[];
  }

  public get color(): string {
    return this.value.color;
  }

  public set color(color: string) {
    this.value.color = color;
  }

  public get transparency(): number {
    return this.value.transparency;
  }

  public set transparency(transparency: number) {
    this.value.transparency = transparency;
  }

  public get glow(): number {
    return this.value.glow;
  }

  public set glow(glow: number) {
    this.value.glow = glow;
  }

  public get smoothness(): number {
    return this.value.smoothness;
  }

  public set smoothness(smoothness: number) {
    this.value.smoothness = smoothness;
  }

  public get isMetallic(): boolean {
    return this.value.isMetallic;
  }

  public set isMetallic(isMetallic: boolean) {
    this.value.isMetallic = isMetallic;
  }

  public readonly onColorChanged = (
    callback: (color: { previousValue: string; nextValue: string }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.color === value.nextValue.color) {
        return;
      }

      callback({
        previousValue: value.previousValue.color,
        nextValue: value.nextValue.color,
      });
    });
  };

  public readonly onTransparencyChanged = (
    callback: (transparency: {
      previousValue: number;
      nextValue: number;
    }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.transparency === value.nextValue.transparency) {
        return;
      }

      callback({
        previousValue: value.previousValue.transparency,
        nextValue: value.nextValue.transparency,
      });
    });
  };

  public readonly onGlowChanged = (
    callback: (glow: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.glow === value.nextValue.glow) {
        return;
      }

      callback({
        previousValue: value.previousValue.glow,
        nextValue: value.nextValue.glow,
      });
    });
  };

  public readonly onSmoothnessChanged = (
    callback: (smoothness: {
      previousValue: number;
      nextValue: number;
    }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.smoothness === value.nextValue.smoothness) {
        return;
      }

      callback({
        previousValue: value.previousValue.smoothness,
        nextValue: value.nextValue.smoothness,
      });
    });
  };

  public readonly onIsMetallicChanged = (
    callback: (isMetallic: {
      previousValue: boolean;
      nextValue: boolean;
    }) => void,
  ) => {
    return this.onValueChanged((value) => {
      if (value.previousValue.isMetallic === value.nextValue.isMetallic) {
        return;
      }

      callback({
        previousValue: value.previousValue.isMetallic,
        nextValue: value.nextValue.isMetallic,
      });
    });
  };
}
