import { JsonValue } from "../../shared";
import { set } from "./set/set";

/**
 * Returns a function that updates a specified key with a new value using the `set` function.
 *
 * The function that's returned will, when called, asynchronously update the value associated with the specified key. It uses the `set` function to perform the update.
 *
 * @typeParam T - The type of the value to be set. It extends from `JsonValue | undefined`, which means it can be any JSON serializable value, or undefined.
 * @param key - The key for which the value should be updated. It should be a string.
 * @returns - A function that takes a value of type `T` and returns a Promise that resolves to `void`. This function, when called, will asynchronously update the value associated with the specified key.
 *
 * @example
 * const setScore = useMutation<number>('score');
 *
 * await setScore(100); // Sets the value associated with the key 'score' to 100.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link set}
 */
export const useMutation = <T extends JsonValue | undefined>(
	key: string,
): ((value: T) => Promise<void>) => {
	return async (value: T) => {
		return await set(key, value);
	};
};
