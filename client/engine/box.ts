import { CollidableComponent } from "./collidable-component";
import { Entity } from "./entity";
import { GravitationalComponent } from "./gravitational-component";
import { MagneticComponent } from "./magnetic-component";
import { MassiveComponent } from "./massive-component";
import { PositionedComponent } from "./positioned-component";
import { RenderedComponent } from "./rendered-component";
import { SizedComponent } from "./sized-component";
import { SolidComponent } from "./solid-component";

export class Box {
  protected readonly entity: Entity;

  protected readonly collidableComponent: CollidableComponent;
  protected readonly gravitationalComponent: GravitationalComponent;
  protected readonly magneticComponent: MagneticComponent;
  protected readonly massiveComponent: MassiveComponent;
  protected readonly positionedComponent: PositionedComponent;
  protected readonly renderedComponent: RenderedComponent;
  protected readonly sizedComponent: SizedComponent;
  protected readonly solidComponent: SolidComponent;

  constructor({
    id,
    polarity = 0,
    mass = 1,
    x = 0,
    y = 0,
    z = 0,
    color = "white",
    transparency = 0,
    glow = 0,
    smoothness = 0,
    isMetallic = false,
    width = 1,
    height = 1,
    depth = 1,
    bounciness = 0,
    friction = 0,
  }: {
    id?: string;
    polarity?: number;
    mass?: number;
    x?: number;
    y?: number;
    z?: number;
    color?: string;
    transparency?: number;
    glow?: number;
    smoothness?: number;
    isMetallic?: boolean;
    width?: number;
    height?: number;
    depth?: number;
    bounciness?: number;
    friction?: number;
  }) {
    this.entity = new Entity(id);

    this.collidableComponent = new CollidableComponent(this.id);
    this.gravitationalComponent = new GravitationalComponent(this.id);
    this.magneticComponent = new MagneticComponent(this.id, polarity);
    this.massiveComponent = new MassiveComponent(this.id, mass);
    this.positionedComponent = new PositionedComponent(this.id, x, y, z);
    this.renderedComponent = new RenderedComponent(
      this.id,
      color,
      transparency,
      glow,
      smoothness,
      isMetallic,
    );
    this.sizedComponent = new SizedComponent(this.id, width, height, depth);
    this.solidComponent = new SolidComponent(this.id, bounciness, friction);
  }

  public get id(): string {
    return this.entity.id;
  }

  public get polarity(): number {
    return this.magneticComponent.polarity;
  }

  public set polarity(polarity: number) {
    this.magneticComponent.polarity = polarity;
  }

  public get mass(): number {
    return this.massiveComponent.mass;
  }

  public set mass(mass: number) {
    this.massiveComponent.mass = mass;
  }

  public get x(): number {
    return this.positionedComponent.x;
  }

  public set x(x: number) {
    this.positionedComponent.x = x;
  }

  public get y(): number {
    return this.positionedComponent.y;
  }

  public set y(y: number) {
    this.positionedComponent.y = y;
  }

  public get z(): number {
    return this.positionedComponent.z;
  }

  public set z(z: number) {
    this.positionedComponent.z = z;
  }

  public get color(): string {
    return this.renderedComponent.color;
  }

  public set color(color: string) {
    this.renderedComponent.color = color;
  }

  public get transparency(): number {
    return this.renderedComponent.transparency;
  }

  public set transparency(transparency: number) {
    this.renderedComponent.transparency = transparency;
  }

  public get glow(): number {
    return this.renderedComponent.glow;
  }

  public set glow(glow: number) {
    this.renderedComponent.glow = glow;
  }

  public get smoothness(): number {
    return this.renderedComponent.smoothness;
  }

  public set smoothness(smoothness: number) {
    this.renderedComponent.smoothness = smoothness;
  }

  public get isMetallic(): boolean {
    return this.renderedComponent.isMetallic;
  }

  public set isMetallic(isMetallic: boolean) {
    this.renderedComponent.isMetallic = isMetallic;
  }

  public get width(): number {
    return this.sizedComponent.width;
  }

  public set width(width: number) {
    this.sizedComponent.width = width;
  }

  public get height(): number {
    return this.sizedComponent.height;
  }

  public set height(height: number) {
    this.sizedComponent.height = height;
  }

  public get depth(): number {
    return this.sizedComponent.depth;
  }

  public set depth(depth: number) {
    this.sizedComponent.depth = depth;
  }

  public get bounciness(): number {
    return this.solidComponent.bounciness;
  }

  public set bounciness(bounciness: number) {
    this.solidComponent.bounciness = bounciness;
  }

  public get friction(): number {
    return this.solidComponent.friction;
  }

  public set friction(friction: number) {
    this.solidComponent.friction = friction;
  }

  public readonly onPolarityChanged = (
    callback: (polarity: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.magneticComponent.onPolarityChanged(callback);
  };

  public readonly onMassChanged = (
    callback: (mass: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.massiveComponent.onMassChanged(callback);
  };

  public readonly onPositionChanged = (
    callback: (position: {
      previousValue: { x: number; y: number; z: number };
      nextValue: { x: number; y: number; z: number };
    }) => void,
  ) => {
    return this.positionedComponent.onPositionChanged(callback);
  };

  public readonly onXChanged = (
    callback: (x: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.positionedComponent.onXChanged(callback);
  };

  public readonly onYChanged = (
    callback: (y: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.positionedComponent.onYChanged(callback);
  };

  public readonly onZChanged = (
    callback: (z: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.positionedComponent.onZChanged(callback);
  };

  public readonly onColorChanged = (
    callback: (color: { previousValue: string; nextValue: string }) => void,
  ) => {
    return this.renderedComponent.onColorChanged(callback);
  };

  public readonly onTransparencyChanged = (
    callback: (transparency: {
      previousValue: number;
      nextValue: number;
    }) => void,
  ) => {
    return this.renderedComponent.onTransparencyChanged(callback);
  };

  public readonly onGlowChanged = (
    callback: (glow: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.renderedComponent.onGlowChanged(callback);
  };

  public readonly onSmoothnessChanged = (
    callback: (smoothness: {
      previousValue: number;
      nextValue: number;
    }) => void,
  ) => {
    return this.renderedComponent.onSmoothnessChanged(callback);
  };

  public readonly onIsMetallicChanged = (
    callback: (isMetallic: {
      previousValue: boolean;
      nextValue: boolean;
    }) => void,
  ) => {
    return this.renderedComponent.onIsMetallicChanged(callback);
  };

  public readonly onSizeChanged = (
    callback: (size: {
      previousValue: { width: number; height: number; depth: number };
      nextValue: { width: number; height: number; depth: number };
    }) => void,
  ) => {
    return this.sizedComponent.onSizeChanged(callback);
  };

  public readonly onWidthChanged = (
    callback: (width: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.sizedComponent.onWidthChanged(callback);
  };

  public readonly onHeightChanged = (
    callback: (height: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.sizedComponent.onHeightChanged(callback);
  };

  public readonly onDepthChanged = (
    callback: (depth: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.sizedComponent.onDepthChanged(callback);
  };

  public readonly onBouncinessChanged = (
    callback: (bounciness: {
      previousValue: number;
      nextValue: number;
    }) => void,
  ) => {
    return this.solidComponent.onBouncinessChanged(callback);
  };

  public readonly onFrictionChanged = (
    callback: (friction: { previousValue: number; nextValue: number }) => void,
  ) => {
    return this.solidComponent.onFrictionChanged(callback);
  };
}
