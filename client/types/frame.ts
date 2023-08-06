/**
 * Represents a frame in an animation sequence.
 *
 * A `Frame` object contains information about the current state of an animation frame, including its index, timestamp, and the time passed since the last frame.
 *
 * @example
 * const frame: Frame = {
 *    index: 0,
 *    timestamp: 1617948908000,
 *    millisecondsSinceLastFrame: 16,
 * };
 */
export type Frame = {
	/**
	 * The position of this frame in the sequence of frames. It starts from 0 and increments by 1 for each frame.
	 */
	index: number;

	/**
	 * The timestamp at which this frame was created. It's represented as the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, also known as the Unix Epoch.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Glossary/Unix_time Unix time
	 */
	timestamp: number;

	/**
	 * The number of milliseconds that have passed since the previous frame.
	 */
	millisecondsSinceLastFrame: number;
};
