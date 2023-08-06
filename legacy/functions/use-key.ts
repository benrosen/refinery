import { JsonValue } from "../../shared";
import { useMutation } from "./use-mutation";
import { useQuery } from "./use-query";

/**
 * A custom hook that provides an interface to fetch and update a value associated with a specific key.
 *
 * `useKey` combines the capabilities of `useQuery` and `useMutation`, offering a unified approach to retrieve and modify data linked to a certain key.
 *
 * @param key - The key for which the value will be queried and potentially mutated. This key should be of type string.
 * @param initialValue - An optional parameter representing the default value of type `T`. If the `useQuery` function can't find a value associated with the key, this initial value is returned.
 *
 * @returns An object with two primary methods:
 *            1) `get`: A function that fetches the value linked to the specified key. This corresponds to the functionality provided by `useQuery`.
 *            2) `set`: A function that updates the value of the specified key. This mirrors the behavior of `useMutation`.
 *
 * @example
 * const scoreKey = useKey('score');
 *
 * const score = await scoreKey.get(); // Retrieves the value associated with the key 'score'.
 *
 * await scoreKey.set(100); // Updates the value associated with the key 'score' to 100.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link useQuery}
 * {@link useMutation}
 */
export const useKey = <T extends JsonValue | undefined>(
	key: string,
	initialValue?: T,
) => {
	const query = useQuery<T>(key, initialValue);

	const mutate = useMutation<T>(key);

	return {
		get: query,
		set: mutate,
	};
};
