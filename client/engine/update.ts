import { Frame } from "./frame";
import { State } from "./state";

/**
 * The Update class provides a way to update the game.
 */
export class Update {
  private readonly _isPaused = new State<boolean>("is-paused", false);

  private readonly frameCount = new State<number>("frame-count", 0);

  private readonly timestamp = new State<number>("timestamp");

  private readonly beforeEachUpdateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  private readonly duringEachUpdateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  private readonly afterEachUpdateHandlers = new Set<
    (frame: Frame) => Promise<void>
  >();

  /**
   * Whether the game is paused.
   */
  public get isPaused() {
    return this._isPaused.get();
  }

  /**
   * Invoke a callback function when the game is paused.
   *
   * @param callback - The callback function to invoke.
   *
   * @returns A function that removes the callback function from the paused event.
   */
  public onPaused = (callback: () => void) => {
    return this._isPaused.onChanged((value) => {
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
  public onResumed = (callback: () => void) => {
    return this._isPaused.onChanged(({ previousValue, nextValue }) => {
      const wasResumed = previousValue === true && nextValue === false;

      if (wasResumed) {
        callback();
      }
    });
  };

  /**
   * Pause the game.
   */
  public pause = () => {
    this._isPaused.set(true);
  };

  /**
   * Resume the game.
   */
  public resume = () => {
    this._isPaused.set(false);
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
  public beforeEachUpdate = (handler: (frame: Frame) => Promise<void>) => {
    this.beforeEachUpdateHandlers.add(handler);

    return () => {
      this.beforeEachUpdateHandlers.delete(handler);
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
  public duringEachUpdate = (handler: (frame: Frame) => Promise<void>) => {
    this.duringEachUpdateHandlers.add(handler);

    return () => {
      this.duringEachUpdateHandlers.delete(handler);
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
  public afterEachUpdate = (handler: (frame: Frame) => Promise<void>) => {
    this.afterEachUpdateHandlers.add(handler);

    return () => {
      this.afterEachUpdateHandlers.delete(handler);
    };
  };

  /**
   * Update the game.
   *
   * @private
   */
  public update = async () => {
    const frameCount = this.frameCount.get();

    const timestamp = this.timestamp.get();

    const nextFrameCount = frameCount + 1;

    const nextTimestamp = Date.now();

    this.frameCount.set(nextFrameCount);

    this.timestamp.set(nextTimestamp);

    if (this.isPaused) {
      requestAnimationFrame(this.update);

      return;
    }

    const nextFrame: Frame = {
      index: nextFrameCount,
      timestamp: nextTimestamp,
      delta: timestamp ? nextTimestamp - timestamp : undefined,
    };

    await Promise.all(
      Array.from(this.beforeEachUpdateHandlers).map((handler, index) => {
        return handler(nextFrame);
      }),
    );

    await Promise.all(
      Array.from(this.duringEachUpdateHandlers).map((handler, index) => {
        return handler(nextFrame);
      }),
    );

    await Promise.all(
      Array.from(this.afterEachUpdateHandlers).map((handler, index) => {
        return handler(nextFrame);
      }),
    );

    requestAnimationFrame(this.update);
  };
}
