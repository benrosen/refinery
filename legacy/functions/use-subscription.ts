import { JsonValue } from "../../shared";
import { on } from "./on/on";

/**
 * Returns a function that sets up a subscription to a specified topic using the `on` function.
 *
 * The function that's returned will, when called with a handler function, set up a subscription on the specified topic. The handler function is invoked whenever data associated with the topic is published. The subscription is removed when the returned cleanup function is called.
 *
 * @typeParam T - The type of the data to be handled. It extends from `JsonValue | undefined`, which means it can be any JSON serializable value, or undefined.
 * @param topic - The topic for which the subscription should be set. It should be a string.
 * @returns A function that takes a handler function of type `(data: T) => void` and returns a cleanup function of type `() => void`. The handler function is called whenever data is published on the topic. The cleanup function, when called, will remove the subscription.
 *
 * @example
 * const handleScoreUpdate = useSubscription<number>('score');
 *
 * const cleanup = handleScoreUpdate(score => {
 *   console.log(`Score updated: ${score}`);
 * });
 *
 * // Later...
 * cleanup(); // Removes the subscription to the 'score' topic.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link on}
 */
export const useSubscription = <T extends JsonValue | undefined>(
	topic: string,
): ((handler: (data: T) => void) => () => void) => {
	return (handler: (data: T) => void) => {
		return on(topic, handler);
	};
};
