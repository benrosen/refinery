import { Frame } from "./frame";
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

  /**
   * Whether the game is paused.
   */
  public static get isPaused() {
    return Update._isPaused.get();
  }

  /**
   * Invoke a callback function when the game is paused.
   *
   * @param callback - The callback function to invoke.
   *
   * @returns A function that removes the callback function from the paused event.
   */
  public static onPaused = (callback: () => void) => {
    return Update._isPaused.onChanged((value) => {
      if (value) {
        callback();
      }
    });
  };

  /**
   * Invoke a callback function when the game is resumed.
   *
   * @param callback - The callback function to invoke.
   *
   * @returns A function that removes the callback function from the resumed event.
   */
  public static onResumed = (callback: () => void) => {
    return Update._isPaused.onChanged((value) => {
      if (!value) {
        callback();
      }
    });
  };

  /**
   * Pause the game.
   */
  public static pause = () => {
    Update._isPaused.set(true);
  };

  /**
   * Resume the game.
   */
  public static resume = () => {
    Update._isPaused.set(false);
  };

  /**
   * Invoke a callback each frame before each update
   *
   * @param handler - The callback function to invoke.
   *
   * @returns A function that removes the callback function from the before each update event.
   *
   * @example
   * Update.beforeEachUpdate((frame) => {
   *   console.log(frame);
   * });
   */
  public static beforeEachUpdate = (
    handler: (frame: Frame) => Promise<void>,
  ) => {
    Update.beforeEachUpdateHandlers.add(handler);

    return () => {
      Update.beforeEachUpdateHandlers.delete(handler);
    };
  };

  /**
   * Invoke a callback each frame during each update.
   *
   * @param handler - The callback function to invoke.
   *
   * @returns A function that removes the callback function from the during each update event.
   *
   * @example
   * Update.duringEachUpdate((frame) => {
   *     console.log(frame);
   * })
   */
  public static duringEachUpdate = (
    handler: (frame: Frame) => Promise<void>,
  ) => {
    Update.duringEachUpdateHandlers.add(handler);

    return () => {
      Update.duringEachUpdateHandlers.delete(handler);
    };
  };

  /**
   * Invoke a callback each frame after each update.
   *
   * @param handler - The callback function to invoke.
   *
   * @returns A function that removes the callback function from the after each update event.
   *
   * @example
   * Update.afterEachUpdate((frame) => {
   *     console.log(frame);
   * })
   */
  public static afterEachUpdate = (
    handler: (frame: Frame) => Promise<void>,
  ) => {
    Update.afterEachUpdateHandlers.add(handler);

    return () => {
      Update.afterEachUpdateHandlers.delete(handler);
    };
  };

  /**
   * Update the game.
   *
   * @private
   */
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

  /**
   * Initialize the update loop.
   */
  static {
    (async () => {
      await Update.update();
    })();
  }
}
