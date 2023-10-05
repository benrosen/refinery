import { Debug } from "./debug";
import { Entity } from "./entity";
import { Graphics } from "./graphics";
import { Input } from "./input";
import { Physics } from "./physics";
import { State } from "./state";
import { System } from "./system";
import { Topic } from "./topic";
import { Update } from "./update";

export class Engine {
  public readonly get = State.get;

  public readonly set = State.set;

  public readonly emit = Topic.emit;

  public readonly on = Topic.on;

  public readonly onChanged = State.onChanged;

  public readonly duringEachUpdate: Update["duringEachUpdate"];

  public readonly pause: Update["pause"];

  public readonly resume: Update["resume"];

  public readonly onPaused: Update["onPaused"];

  public readonly onResumed: Update["onResumed"];

  public readonly log = Debug.log;

  public readonly report = Debug.report;

  public readonly select = Entity.select;

  public readonly selectAll = Entity.selectAll;

  public readonly destroy = Entity.destroy;

  public readonly primaryController: Input["primaryController"];

  public readonly secondaryController: Input["secondaryController"];

  public readonly start: () => void;

  private readonly update: Update;

  private readonly input: Input;

  constructor() {
    this.update = new Update();

    this.input = new Input();

    this.duringEachUpdate = this.update.duringEachUpdate;

    this.pause = this.update.pause;

    this.resume = this.update.resume;

    this.onPaused = this.update.onPaused;

    this.onResumed = this.update.onResumed;

    this.update.beforeEachUpdate(async ({ delta }) => {
      this.input.update();

      Physics.update(delta);
    });

    this.update.afterEachUpdate(async () => {
      Graphics.update();
    });

    this.update.duringEachUpdate(async () => {
      await System.update();
    });

    Debug.onLog((value) => {
      console.log(value);
    });

    Debug.onReport((report) => {
      console.error(report);
    });

    this.start = () => {
      return this.update.update();
    };
  }

  public get backgroundColor(): string {
    return Graphics.backgroundColor;
  }

  public set backgroundColor(value: string) {
    Graphics.backgroundColor = value;
  }

  // schedule

  // todo learn about sequencer in tone.js

  // things i would want to do with a sequencer/scheduler:
  // - trigger a callback on a time interval that can be cancelled from anywhere, including the callback itself

  public get isPaused(): boolean {
    return this.update.isPaused;
  }
}
