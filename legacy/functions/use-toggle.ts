import { useState } from "./use-state";

/**
 * Returns an object containing functions for managing a boolean toggle state, including fetching the current state, updating it, toggling it, and subscribing to state changes.
 *
 * This function leverages `useState` for fetching and updating state and adding a special `toggle` function.
 *
 * @param key - The key to be used for querying and mutating the state. It should be a string.
 * @param initialValue - An optional parameter, which is the initial boolean value. If not provided, it defaults to `false`.
 * @returns - An object containing four functions:
 *            1) `get` which fetches the current state.
 *            2) `set` which updates the state and notifies subscribers.
 *            3) `toggle` which inverts the current state and notifies subscribers.
 *            4) `onSet` which allows subscription to state changes.
 *
 * @example
 * const darkMode = useToggle('darkMode', true);
 *
 * const cleanup = darkMode.onSet(newMode => {
 *   console.log(`Dark mode is now: ${newMode ? 'enabled' : 'disabled'}`);
 * });
 *
 * const isDarkMode = await darkMode.get(); // Fetches the current mode. If not present, returns true.
 *
 * await darkMode.set(false); // Sets the mode to false and notifies subscribers.
 *
 * await darkMode.toggle(); // Toggles the mode (from false to true) and notifies subscribers.
 *
 * // Later...
 * cleanup(); // Removes the subscription.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link useState}
 */
export const useToggle = (key: string, initialValue = false) => {
	const { get, set, onSet } = useState<boolean>(key, initialValue);

	const toggle = async () => {
		const value = await get();

		await set(!value);
	};

	return {
		get,
		set,
		toggle,
		onSet,
	};
};
