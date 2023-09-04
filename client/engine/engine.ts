import { Debug } from "./debug";
import { Entity } from "./entity";
import { Graphics } from "./graphics";
import { Input } from "./input";
import { Physics } from "./physics";
import { State } from "./state";
import { Topic } from "./topic";
import { Update } from "./update";

export class Engine {
  public static readonly get = State.get;

  public static readonly set = State.set;

  public static readonly emit = Topic.emit;

  public static readonly on = Topic.on;

  public static readonly onChanged = State.onChanged;

  public static readonly duringEachUpdate = Update.duringEachUpdate;

  public static readonly pause = Update.pause;

  public static readonly resume = Update.resume;

  public static readonly onPaused = Update.onPaused;

  public static readonly onResumed = Update.onResumed;

  public static readonly log = Debug.log;

  public static readonly report = Debug.report;

  public static readonly spawn = Entity.spawn;

  public static readonly destroy = Entity.destroy;

  public static readonly find = Entity.find;

  public static readonly primaryController = Input.primaryController;

  public static readonly secondaryController = Input.secondaryController;

  public static readonly backgroundColor = Graphics.backgroundColor;

  public static readonly isPaused = Update.isPaused;

  // schedule

  // todo learn about sequencer in tone.js

  // things i would want to do with a sequencer/scheduler:
  // - trigger a callback on a time interval that can be cancelled from anywhere, including the callback itself

  static {
    Update.beforeEachUpdate(async ({ delta }) => {
      Input.update();

      Physics.update(delta);
    });

    Update.afterEachUpdate(async () => {
      Graphics.update();
    });

    Debug.onLog((value) => {
      console.log(value);
    });

    Debug.onReport((report) => {
      console.error(report);
    });
  }
}
