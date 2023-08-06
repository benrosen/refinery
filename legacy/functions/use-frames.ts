import { Frame } from "../../client/types";
import { useCounter } from "./use-counter";

/**
 * This hook initializes an animation frame loop, providing a means to subscribe to and unsubscribe from frame updates.
 *
 * It uses the `useCounter` hook to manage two counters, one for frame number and another for time. On each animation frame, it increments these counters
 * and notifies each subscribed handler with the current frame data.
 *
 * Additionally, you can specify handler functions to be invoked before and after each frame update.
 *
 * @param beforeFrameHandlers - A handler function to be invoked before each frame update. The handler receives the current frame of type `Frame` as its argument.
 * @param afterFrameHandlers - A handler function to be invoked after each frame update. The handler receives the current frame of type `Frame` as its argument.
 * @returns - A function that takes a handler of type `(frame: Frame) => Promise<void>`. This function will subscribe the handler to frame updates and returns a cleanup function. When the cleanup function is called, it unsubscribes the handler from frame updates.
 *
 * @example
 * const subscribe = useFrames(
 *    async frame => console.log('Before frame:', frame),
 *    async frame => console.log('After frame:', frame)
 * );
 *
 * const unsubscribe = subscribe(async frame => console.log('Frame:', frame)); // Logs the frame data to the console on each frame.
 * unsubscribe(); // Stops logging the frame data to the console.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame requestAnimationFrame
 * @see Frame
 * @see useCounter
 */
export const useFrames = (
	beforeFrameHandlers: (frame: Frame) => Promise<void>,
	afterFrameHandlers: (frame: Frame) => Promise<void>,
) => {
	const { get: getFrameNumber, set: setFrameNumber } =
		useCounter("frameNumber");

	const { get: getTime, set: setTime } = useCounter("time");

	const frameHandlers: ((frame: Frame) => Promise<void>)[] = [];

	const update = async () => {
		const frameNumberPromise = getFrameNumber();

		const timePromise = getTime();

		const [previousFrameNumber, previousFrameTimestamp] = await Promise.all([
			frameNumberPromise,
			timePromise,
		]);

		const timestamp = Date.now();

		const millisecondsSinceLastFrame = timestamp - previousFrameTimestamp;

		const index = previousFrameNumber + 1;

		const frame: Frame = {
			index,
			timestamp,
			millisecondsSinceLastFrame,
		};

		await Promise.all([setTime(timestamp), setFrameNumber(index)]);

		await beforeFrameHandlers(frame);

		await Promise.all([...frameHandlers].map((handler) => handler(frame)));

		await afterFrameHandlers(frame);

		requestAnimationFrame(update);
	};

	requestAnimationFrame(update);

	return (handler: (frame: Frame) => Promise<void>) => {
		frameHandlers.push(handler);

		return () => {
			const index = frameHandlers.indexOf(handler);

			frameHandlers.splice(index, 1);
		};
	};
};
