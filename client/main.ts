import { JsonValue } from "../shared";
import { Component } from "./engine/component";
import { Entity } from "./engine/entity";
import { System } from "./engine/system";

////

class Constraint<T extends JsonValue> {
  constructor(
    defaultValue: T,
    private constrain: (value: unknown) => T,
  ) {
    this.value = defaultValue;
  }

  private _value: T;

  public get value(): T {
    return this._value;
  }

  public set value(value: T) {
    this._value = this.constrain(value);
  }
}

class Range extends Constraint<number> {
  constructor(minimum: number, maximum: number) {
    super(minimum, (value) => {
      if (typeof value !== "number") {
        throw new Error(`Expected a number, but got ${value}`);
      }

      if (value < minimum) {
        return minimum;
      }

      if (value > maximum) {
        return maximum;
      }

      return value;
    });
  }
}

class NormalizedRange extends Range {
  constructor() {
    super(0, 1);
  }
}

class BipolarRange extends Range {
  constructor() {
    super(-1, 1);
  }
}

class PositiveNumber extends Range {
  constructor() {
    super(0, Infinity);
  }
}

class NegativeNumber extends Range {
  constructor() {
    super(-Infinity, 0);
  }
}

////

type Collidable = {
  isCollidable: true;
  // callbacks aren't json serializable, so they'll have to be handled differently
  // onCollidedWith: (entityId: string) => void;
  // onEnteredBy: (entityId: string) => void;
  // onExitedBy: (entityId: string) => void;
};

type Gravitational = {
  isGravitational: true;
};

type Magnetic = {
  isMagnetic: true;
  polarity: number;
};

type Massive = {
  isMassive: true;
  mass: number;
};

type Positioned = {
  isPositioned: true;
  x: number;
  y: number;
  z: number;
};

type Rendered = {
  isRendered: true;
  color: string;
  transparency: number;
  glow: number;
  smoothness: number;
  isMetallic: boolean;
};

type Sized = {
  isSized: true;
  width: number;
  height: number;
  depth: number;
};

type Solid = {
  isSolid: true;
  bounciness: number;
  friction: number;
};

////

class CollidableComponent extends Component<Collidable> {
  public static readonly type = "collidable" as const;

  constructor(entityId: string) {
    super(CollidableComponent.type, entityId, {
      isCollidable: true,
    });
  }
}

class GravitationalComponent extends Component<Gravitational> {
  public static readonly type = "gravitational" as const;

  constructor(entityId: string) {
    super(GravitationalComponent.type, entityId, {
      isGravitational: true,
    });
  }
}

class MagneticComponent extends Component<Magnetic> {
  public static readonly type = "magnetic" as const;

  constructor(entityId: string, polarity: number) {
    super(MagneticComponent.type, entityId, {
      isMagnetic: true,
      polarity,
    });
  }
}

class MassiveComponent extends Component<Massive> {
  constructor(entityId: string, mass: number) {
    super(MassiveComponent.type, entityId, {
      isMassive: true,
      mass,
    });
  }
}

class PositionedComponent extends Component<Positioned> {
  public static readonly type = "positioned" as const;

  constructor(entityId: string, x: number, y: number, z: number) {
    super(PositionedComponent.type, entityId, {
      isPositioned: true,
      x,
      y,
      z,
    });
  }
}

class RenderedComponent extends Component<Rendered> {
  public static readonly type = "rendered" as const;

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
}

class SizedComponent extends Component<Sized> {
  public static readonly type = "sized" as const;

  constructor(entityId: string, width: number, height: number, depth: number) {
    super(SizedComponent.type, entityId, {
      isSized: true,
      width,
      height,
      depth,
    });
  }
}

class SolidComponent extends Component<Solid> {
  public static readonly type = "solid" as const;

  constructor(entityId: string, bounciness: number, friction: number) {
    super(SolidComponent.type, entityId, {
      isSolid: true,
      bounciness,
      friction,
    });
  }
}

////

class Gravity extends System<GravitationalComponent["type"]> {
  constructor() {
    super(GravitationalComponent.type, async (component) => {
      //
    });
  }
}

class Magnetism extends System<MagneticComponent["type"]> {
  constructor() {
    super(MagneticComponent.type, async (component) => {
      //
    });
  }
}

////

class Box {
  constructor(polarity: number, mass: number) {
    const entity = new Entity();

    new CollidableComponent(entity.id);
    new GravitationalComponent(entity.id);
    new MagneticComponent(entity.id, 1);
    new MassiveComponent(entity.id, 1);
    new PositionedComponent(entity.id, 0, 0, 0);
    new RenderedComponent(entity.id, "#ffffff", 0, 0, 0, false);
    new SizedComponent(entity.id, 1, 1, 1);
    new SolidComponent(entity.id, 0, 0);
  }
}
