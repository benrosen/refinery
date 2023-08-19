import * as CANNON from "cannon-es";
import * as THREE from "three";
import { JsonValueOrUndefined } from "../shared";

export class Topic<T extends JsonValueOrUndefined> {
  private static TARGET = new EventTarget();

  constructor(private readonly topic: string) {}

  public static emit = <T extends JsonValueOrUndefined>(
    topic: string,
    value: T,
  ): T => {
    Topic.TARGET.dispatchEvent(new CustomEvent(topic, { detail: value }));

    return value;
  };

  public static on = <T extends JsonValueOrUndefined>(
    topic: string,
    callback: (value: T) => void,
  ): (() => void) => {
    const handler = (event: CustomEvent<T>) => {
      callback(event.detail);
    };

    Topic.TARGET.addEventListener(topic, handler);

    return () => {
      Topic.TARGET.removeEventListener(topic, handler);
    };
  };

  public emit = (value: T): T => {
    return Topic.emit<T>(this.topic, value);
  };

  public on = (callback: (value: T) => void): (() => void) => {
    return Topic.on<T>(this.topic, callback);
  };
}

export class Key<T extends JsonValueOrUndefined> {
  private static STORE = new Map<string, JsonValueOrUndefined>();

  constructor(
    private readonly key: string,
    private readonly defaultValue?: JsonValueOrUndefined,
  ) {}

  public static get = <T extends JsonValueOrUndefined>(
    key: string,
    defaultValue?: T,
  ): T => {
    return (Key.STORE.get(key) as T) || defaultValue;
  };

  public static set = <T extends JsonValueOrUndefined>(
    key: string,
    value: T,
  ): T => {
    Key.STORE.set(key, value);

    return value;
  };

  public get = (): T => {
    return Key.get<T>(this.key, this.defaultValue as T);
  };

  public set = (value: T): T => {
    return Key.set<T>(this.key, value);
  };
}

export class State<T extends JsonValueOrUndefined> {
  constructor(
    private readonly key: string,
    private readonly defaultValue?: T,
  ) {}

  private get stateChangedTopicName(): string {
    return State.getStateChangedTopicName(this.key);
  }

  public static get = <T extends JsonValueOrUndefined>(
    key: string,
    defaultValue?: T,
  ): T => {
    return Key.get(key, defaultValue);
  };

  public static set = <T extends JsonValueOrUndefined>(
    key: string,
    value: T,
  ): T => {
    const result = Key.set(key, value);

    const stateChangedTopicName = State.getStateChangedTopicName(key);

    Topic.emit(stateChangedTopicName, result);

    return result;
  };

  public static onChanged = <T extends JsonValueOrUndefined>(
    key: string,
    callback: (value: T) => void,
  ): (() => void) => {
    const stateChangedTopicName = State.getStateChangedTopicName(key);

    return Topic.on(stateChangedTopicName, callback);
  };

  protected static getStateChangedTopicName = (key: string): string => {
    return `state:${key}:changed`;
  };

  public get = (): T => {
    return State.get(this.key, this.defaultValue);
  };

  public set = (value: T): T => {
    return State.set(this.key, value);
  };

  public onChanged = (callback: (value: T) => void): (() => void) => {
    return State.onChanged(this.stateChangedTopicName, callback);
  };
}

interface Frame {
  index: number;
  timestamp: number;
  delta: number | undefined;
}

class Update {
  private static readonly _isPaused = new State<boolean>("is-paused", false);

  private static readonly frameCount = new State<number>("frame-count", 0);

  private static readonly timestamp = new State<number>("timestamp");

  private static readonly beforeUpdateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  private static readonly updateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  private static readonly afterUpdateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  public static get isPaused() {
    return Update._isPaused.get();
  }

  public static onPaused = (callback: () => void) => {
    return Update._isPaused.onChanged((value) => {
      if (value) {
        callback();
      }
    });
  };

  public static onResumed = (callback: () => void) => {
    return Update._isPaused.onChanged((value) => {
      if (!value) {
        callback();
      }
    });
  };

  public static pause = () => {
    Update._isPaused.set(true);
  };

  public static resume = () => {
    Update._isPaused.set(false);
  };

  public static before = (handler: (frame: Frame) => Promise<void>) => {
    Update.beforeUpdateHandlers.add(handler);

    return () => {
      Update.beforeUpdateHandlers.delete(handler);
    };
  };

  public static on = (handler: (frame: Frame) => Promise<void>) => {
    Update.updateHandlers.add(handler);

    return () => {
      Update.updateHandlers.delete(handler);
    };
  };

  public static after = (handler: (frame: Frame) => Promise<void>) => {
    Update.afterUpdateHandlers.add(handler);

    return () => {
      Update.afterUpdateHandlers.delete(handler);
    };
  };

  private static update = async () => {
    const frameCount = Update.frameCount.get();

    const timestamp = Update.timestamp.get();

    const nextFrameCount = frameCount + 1;

    const nextTimestamp = Date.now();

    Update.frameCount.set(nextFrameCount);

    Update.timestamp.set(nextTimestamp);

    if (Update.isPaused) {
      requestAnimationFrame(Update.update);

      return;
    }

    const nextFrame: Frame = {
      index: nextFrameCount,
      timestamp: nextTimestamp,
      delta: timestamp ? nextTimestamp - timestamp : undefined,
    };

    await Promise.all(
      Array.from(Update.beforeUpdateHandlers).map((handler) => {
        return handler(nextFrame);
      }),
    );

    await Promise.all(
      Array.from(Update.updateHandlers).map((handler) => {
        return handler(nextFrame);
      }),
    );

    await Promise.all(
      Array.from(Update.afterUpdateHandlers).map((handler) => {
        return handler(nextFrame);
      }),
    );

    requestAnimationFrame(Update.update);
  };

  static {
    (async () => {
      await Update.update();
    })();
  }
}

class Input {
  private static gamepads = navigator.getGamepads();

  public static poll = () => {
    const nextGamepads = navigator.getGamepads();

    Input.gamepads.forEach((gamepad) => {
      if (gamepad === null) {
        return;
      }

      const nextGamepad: Gamepad = nextGamepads[gamepad.index];

      if (!nextGamepad) {
        return;
      }

      nextGamepad.buttons.forEach((button, buttonIndex) => {
        if (button.pressed && !gamepad.buttons[buttonIndex].pressed) {
          Topic.emit("GamepadButtonPressed", {
            gamepadIndex: gamepad.index,
            buttonIndex,
          });
        } else if (!button.pressed && gamepad.buttons[buttonIndex].pressed) {
          Topic.emit("GamepadButtonReleased", {
            gamepadIndex: gamepad.index,
            buttonIndex,
          });
        }
      });

      nextGamepad.axes.forEach((axis, axisIndex) => {
        if (axis !== gamepad.axes[axisIndex]) {
          Topic.emit("GamepadAxisChanged", {
            gamepadIndex: gamepad.index,
            axisIndex,
            value: axis,
          });
        }
      });
    });

    Input.gamepads = nextGamepads;
  };

  static {
    window.addEventListener("gamepadconnected", (event) => {
      Topic.emit("GamepadConnected", event.gamepad.index);
    });

    window.addEventListener("gamepaddisconnected", (event) => {
      Topic.emit("GamepadDisconnected", event.gamepad.index);
    });
  }
}

class Button {
  private readonly _isPressed = new State<boolean>(
    this.isPressedKeyName,
    false,
  );

  constructor(
    private readonly gamepadIndex: number,
    private readonly buttonIndex: number,
  ) {
    Topic.on<{
      gamepadIndex: number;
      buttonIndex: number;
    }>("GamepadButtonPressed", (event) => {
      if (
        event.gamepadIndex === this.gamepadIndex &&
        event.buttonIndex === this.buttonIndex
      ) {
        this._isPressed.set(true);
      }
    });

    Topic.on<{
      gamepadIndex: number;
      buttonIndex: number;
    }>("GamepadButtonReleased", (event) => {
      if (
        event.gamepadIndex === this.gamepadIndex &&
        event.buttonIndex === this.buttonIndex
      ) {
        this._isPressed.set(false);
      }
    });
  }

  public get isPressed(): boolean {
    return this._isPressed.get();
  }

  private get isPressedKeyName(): string {
    return Button.getIsPressedKeyName(this.gamepadIndex, this.buttonIndex);
  }

  private static getIsPressedKeyName = (
    gamepadIndex: number,
    buttonIndex: number,
  ): string => {
    return `gamepad/${gamepadIndex}/button/${buttonIndex}/isPressed`;
  };

  public onPressed = (callback: () => void): (() => void) => {
    return this._isPressed.onChanged((isPressed) => {
      if (isPressed) {
        callback();
      }
    });
  };

  public onReleased = (callback: () => void): (() => void) => {
    return this._isPressed.onChanged((isPressed) => {
      if (!isPressed) {
        callback();
      }
    });
  };
}

class Axis {
  private readonly _value = new State<number>(this.valueKeyName, 0);

  constructor(
    private readonly gamepadIndex: number,
    private readonly axisIndex: number,
  ) {
    Topic.on<{
      gamepadIndex: number;
      axisIndex: number;
      value: number;
    }>("GamepadAxisChanged", (event) => {
      if (
        event.gamepadIndex === this.gamepadIndex &&
        event.axisIndex === this.axisIndex
      ) {
        this._value.set(event.value);
      }
    });
  }

  public get value(): number {
    return this._value.get();
  }

  private get valueKeyName(): string {
    return Axis.getValueKeyName(this.gamepadIndex, this.axisIndex);
  }

  private static getValueKeyName(
    gamepadIndex: number,
    axisIndex: number,
  ): string {
    return `gamepad/${gamepadIndex}/axis/${axisIndex}/value`;
  }

  public onChanged(callback: (value: number) => void): void {
    this._value.onChanged(callback);
  }

  public onPositive(callback: () => void): void {
    this._value.onChanged((value) => {
      if (value > 0 && this.value <= 0) {
        callback();
      }
    });
  }

  public onNegative(callback: () => void): void {
    this._value.onChanged((value) => {
      if (value < 0 && this.value >= 0) {
        callback();
      }
    });
  }

  public onMaximum(callback: () => void): void {
    this._value.onChanged((value) => {
      if (value === 1 && this.value !== 1) {
        callback();
      }
    });
  }

  public onMinimum(callback: () => void): void {
    this._value.onChanged((value) => {
      if (value === -1 && this.value !== -1) {
        callback();
      }
    });
  }
}

class Joystick {
  public readonly button = new Button(this.gamepadIndex, this.buttonIndex);

  public readonly horizontalAxis = new Axis(
    this.gamepadIndex,
    this.horizontalAxisIndex,
  );

  public readonly verticalAxis = new Axis(
    this.gamepadIndex,
    this.verticalAxisIndex,
  );

  constructor(
    private readonly gamepadIndex: number,
    private readonly buttonIndex: number,
    private readonly horizontalAxisIndex: number,
    private readonly verticalAxisIndex: number,
  ) {}
}

class Controller {
  public readonly = new Button(this.gamepadIndex, 0);

  public readonly circle = new Button(this.gamepadIndex, 1);

  public readonly cross = new Button(this.gamepadIndex, 2);

  public readonly square = new Button(this.gamepadIndex, 3);

  public readonly leftStick = new Joystick(this.gamepadIndex, 0, 1, 0);

  public readonly rightStick = new Joystick(this.gamepadIndex, 2, 3, 1);

  constructor(private readonly gamepadIndex: number) {}
}

export class Engine {
  public static readonly physics = new CANNON.World();

  public static readonly scene = new THREE.Scene();

  public static readonly camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  public static readonly renderer = new THREE.WebGLRenderer();

  public static readonly controller = new Controller(0);

  public static get isPaused(): boolean {
    return Update.isPaused;
  }

  public static pause = (): void => {
    Update.pause();
  };

  public static resume = (): void => {
    Update.resume();
  };

  public static readonly onUpdate = (
    callback: () => Promise<void>,
  ): (() => void) => {
    return Update.on(callback);
  };

  static {
    Update.before(async ({ delta }) => {
      Input.poll();

      Engine.physics.fixedStep(1 / 60, delta);
    });

    Update.after(async () => {
      Engine.renderer.render(Engine.scene, Engine.camera);
    });
  }
}
