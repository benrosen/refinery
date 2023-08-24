import { Controller } from "./controller";
import { Entity } from "./entity";
import { Graphics } from "./graphics";
import { Input } from "./input";
import { Physics } from "./physics";
import { State } from "./state";
import { System } from "./system";
import { Topic } from "./topic";
import { Update } from "./update";

export class Engine {
  // public static readonly physics = Physics;

  // public static readonly audio = Audio;

  public static readonly getState = State.get;

  public static readonly setState = State.set;

  public static readonly onStateChanged = State.onChanged;

  public static readonly emitEvent = Topic.emit;

  public static readonly handleEvent = Topic.on;

  public static createEntity = Entity.create;

  public static deleteEntity = Entity.delete;

  public static createSystem = System.create;

  public static deleteSystem = System.delete;

  public static get primaryController(): Controller {
    return Input.primaryController;
  }

  public static get secondaryController(): Controller {
    return Input.secondaryController;
  }

  public static get backgroundColor(): string {
    return Graphics.backgroundColor;
  }

  public static set backgroundColor(value: string) {
    Graphics.backgroundColor = value;
  }

  public static get isPaused(): boolean {
    return Update.isPaused;
  }

  public static pause = (): void => {
    Update.pause();
  };

  public static resume = (): void => {
    Update.resume();
  };

  public static readonly onPaused = (callback: () => void): (() => void) => {
    return Update.onPaused(callback);
  };

  public static readonly onResumed = (callback: () => void): (() => void) => {
    return Update.onResumed(callback);
  };

  static {
    Update.beforeEachUpdate(async ({ delta }) => {
      Input.update();

      Physics.update(delta);
    });

    Update.duringEachUpdate(System.update);

    Update.afterEachUpdate(async () => {
      Graphics.update();
    });
  }
}
