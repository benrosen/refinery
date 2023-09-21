/**
 * Information about the current frame.
 */
export interface Frame {
  /**
   * The current frame index.
   */
  index: number;

  /**
   * The timestamp of the current frame.
   */
  timestamp: number;

  /**
   * The number of milliseconds since the last frame.
   */
  delta: number | undefined;
}
