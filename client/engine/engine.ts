import { Controller } from "./controller";
import { Graphics } from "./graphics";
import { Input } from "./input";
import { Physics } from "./physics";
import { State } from "./state";
import { Topic } from "./topic";
import { Update } from "./update";

export class Engine {
  // public static readonly physics = Physics;

  // public static readonly audio = Audio;

  public static readonly get = State.get;

  public static readonly set = State.set;

  public static readonly onChanged = State.onChanged;

  public static readonly emit = Topic.emit;

  public static readonly on = Topic.on;

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

  public static readonly onUpdate = (
    callback: () => Promise<void>,
  ): (() => void) => {
    return Update.duringEachUpdate(callback);
  };

  static {
    Update.beforeEachUpdate(async ({ delta }) => {
      Input.update();

      Physics.update(delta);
    });

    Update.afterEachUpdate(async () => {
      Graphics.update();
    });
  }
}
