import { JsonValue } from "../../shared";
import { usePublication } from "./use-publication";
import { useSubscription } from "./use-subscription";

/**
 * Returns an object containing functions for subscribing to and publishing data on a specified topic.
 *
 * This function combines the functionality of `usePublication` and `useSubscription` into a single, convenient function.
 *
 * @typeParam T - The type of the data to be published or received from the topic. It extends from `JsonValue | undefined`, which means it can be any JSON serializable value, or undefined.
 * @param topic - The topic to be used for subscription and publication. It should be a string.
 * @returns - An object containing two functions:
 *            1) `on` which is equivalent to `useSubscription` for the specified topic.
 *            2) `emit` which is equivalent to `usePublication` for the specified topic.
 *
 * @example
 * const scoreTopic = useTopic<number>('score');
 *
 * const cleanup = scoreTopic.on(score => {
 *   console.log(`Score updated: ${score}`);
 * });
 *
 * await scoreTopic.emit(100); // Publishes the value 100 to the topic 'score'.
 *
 * // Later...
 * cleanup(); // Removes the subscription to the 'score' topic.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link usePublication}
 * {@link useSubscription}
 */
export const useTopic = <T extends JsonValue | undefined>(topic: string) => {
	const publish = usePublication<T>(topic);

	const subscribe = useSubscription<T>(topic);

	return {
		on: subscribe,
		emit: publish,
	};
};
