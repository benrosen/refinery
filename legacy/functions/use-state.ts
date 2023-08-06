import { JsonValue } from "../../shared";
import { useKey } from "./use-key";
import { useTopic } from "./use-topic";

/**
 * Returns an object containing functions for managing state, including fetching the current state, updating it, and subscribing to state changes.
 *
 * This function leverages `useKey` for fetching and updating state and `useTopic` for subscribing to state changes.
 *
 * @typeParam T - The type of the state to be managed. It extends from `JsonValue | undefined`, which means it can be any JSON serializable value, or undefined.
 * @param key - The key to be used for querying and mutating the state. It should be a string.
 * @param initialValue - An optional parameter, which is the initial value of type `T`. If the `get` function can't find a value associated with the key, it will return this initial value.
 * @returns An object containing three functions:
 *            1) `get` which fetches the current state.
 *            2) `set` which updates the state and notifies subscribers.
 *            3) `onSet` which allows subscription to state changes.
 *
 * @example
 * const scoreState = useState<number>('score', 0);
 *
 * const currentScore = await scoreState.get(); // Fetches the current score. If not present, returns 0.
 *
 * await scoreState.set(100); // Sets the score to 100 and notifies subscribers.
 *
 * const cleanup = scoreState.onSet(newScore => {
 *   console.log(`Score updated: ${newScore}`);
 * });
 *
 * // Later...
 * cleanup(); // Removes the subscription.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link useKey}
 * {@link useTopic}
 */
export const useState = <T extends JsonValue | undefined>(
	key: string,
	initialValue?: T,
) => {
	const { get, set } = useKey<T>(key, initialValue);

	const topic = window.crypto.randomUUID();

	const { emit, on } = useTopic<T>(topic);

	const setState = async (value: T) => {
		await set(value);

		await emit(value);
	};

	return {
		get,
		set: setState,
		onSet: on,
	};
};
