import { State } from "./state";

interface Frame {
  index: number;
  timestamp: number;
  delta: number | undefined;
}

export class Update {
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
