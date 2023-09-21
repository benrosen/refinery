import { State } from "./state";

/**
 * The Update class provides a way to update the game.
 */
export class Update {
  private static readonly _isPaused = new State<boolean>("is-paused", false);

  private static readonly frameCount = new State<number>("frame-count", 0);

  private static readonly timestamp = new State<number>("timestamp");

  private static readonly beforeEachUpdateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  private static readonly duringEachUpdateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  private static readonly afterEachUpdateHandlers = new Set<
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

  public static beforeEachUpdate = (
    handler: (frame: Frame) => Promise<void>,
  ) => {
    Update.beforeEachUpdateHandlers.add(handler);

    return () => {
      Update.beforeEachUpdateHandlers.delete(handler);
    };
  };

  public static duringEachUpdate = (
    handler: (frame: Frame) => Promise<void>,
  ) => {
    Update.duringEachUpdateHandlers.add(handler);

    return () => {
      Update.duringEachUpdateHandlers.delete(handler);
    };
  };

  public static afterEachUpdate = (
    handler: (frame: Frame) => Promise<void>,
  ) => {
    Update.afterEachUpdateHandlers.add(handler);

    return () => {
      Update.afterEachUpdateHandlers.delete(handler);
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
      Array.from(Update.beforeEachUpdateHandlers).map((handler) => {
        return handler(nextFrame);
      }),
    );

    await Promise.all(
      Array.from(Update.duringEachUpdateHandlers).map((handler) => {
        return handler(nextFrame);
      }),
    );

    await Promise.all(
      Array.from(Update.afterEachUpdateHandlers).map((handler) => {
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
