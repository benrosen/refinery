import { JsonValue } from "../../shared";
import { get } from "./get/get";

/**
 * Returns a function that fetches a value associated with a specified key using the `get` function.
 *
 * The function that's returned will, when called, asynchronously fetch the value associated with the specified key. It uses the `get` function to perform the fetch operation.
 *
 * @typeParam T - The type of the value to be fetched. It extends from `JsonValue | undefined`, which means it can be any JSON serializable value, or undefined.
 * @param key - The key for which the value should be fetched. It should be a string.
 * @param initialValue - An optional parameter, which is the initial value of type `T`. If the `get` function can't find a value associated with the key, it will return this initial value.
 * @returns - A function that returns a Promise that resolves to a value of type `T`. This function, when called, will asynchronously fetch the value associated with the specified key.
 *
 * @example
 * const getScore = useQuery<number>('score', 0);
 *
 * const score = await getScore(); // Fetches the value associated with the key 'score'. If not present, returns 0.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link get}
 */
export const useQuery = <T extends JsonValue | undefined>(
	key: string,
	initialValue?: T,
): (() => Promise<T>) => {
	return async () => {
		return await get<T>(key, initialValue);
	};
};
