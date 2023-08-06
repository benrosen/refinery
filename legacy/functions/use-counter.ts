import { useState } from "./use-state";

/**
 * Returns an object containing functions for managing a numeric counter state, including fetching the current state, updating it, incrementing, decrementing, and subscribing to state changes.
 *
 * This function leverages `useState` for fetching and updating state and adding `increment` and `decrement` functions.
 *
 * @param key - The key to be used for querying and mutating the state. It should be a string.
 * @param initialValue - The initial value to be used if the state is not present. It should be a number.
 * @returns An object containing six functions:
 *            1) `get` which fetches the current state.
 *            2) `set` which updates the state and notifies subscribers.
 *            3) `increment` which increases the current state by 1 and notifies subscribers.
 *            4) `decrement` which decreases the current state by 1 and notifies subscribers.
 *            5) `onSet` which allows subscription to state changes.
 *
 * @example
 * const counter = useCounter('count');
 *
 * const cleanup = counter.onSet(newCount => {
 *   console.log(`Count is now: ${newCount}`);
 * });
 *
 * const currentCount = await counter.get(); // Fetches the current count. If not present, returns 0.
 *
 * await counter.set(10); // Sets the count to 10 and notifies subscribers.
 *
 * await counter.increment(); // Increments the count (from 10 to 11) and notifies subscribers.
 *
 * await counter.decrement(); // Decrements the count (from 11 to 10) and notifies subscribers.
 *
 * // Later...
 * cleanup(); // Removes the subscription.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link useState}
 */
export const useCounter = (key: string, initialValue: number = 0) => {
	const { get, set, onSet } = useState<number>(key, initialValue);

	const increment = async () => {
		const value = await get();

		await set(value + 1);
	};

	const decrement = async () => {
		const value = await get();

		await set(value - 1);
	};

	return {
		get,
		set,
		onSet,
		increment,
		decrement,
	};
};
