import { JsonValue } from "../../../shared";

/**
 * Retrieves a value associated with a given key through an asynchronous HTTP GET request.
 *
 * Utilizing the Fetch API, this function obtains the associated value from the '/key' endpoint. It raises an exception in the event of request failure or when both the retrieved value is undefined and no fallback value is provided.
 *
 * @typeParam T - Denotes the type of value anticipated from the request. This extends from `JsonValue | undefined`, implying it could be any JSON serializable data or undefined.
 * @param key - The key linked to the desired value. This should be a string representation.
 * @param initialValue - A fallback value that's returned when the fetched value is undefined. This can be any data type that extends `JsonValue | undefined`.
 * @returns A Promise that, when resolved, yields the fetched value. If this value is undefined, it defaults to the initialValue.
 *
 * @example
 * const value = await get('testKey', { key: 'value' });
 * // Attempts to retrieve the value linked to 'testKey'. If not found or undefined, it defaults to the provided object { key: 'value' }.
 *
 * @throws Error Raises an exception if:
 *         - The fetch request's response isn't satisfactory.
 *         - Both the retrieved value and the initialValue are undefined.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API Fetch API
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 */
export const get = async <T extends JsonValue | undefined>(
	key: string,
	initialValue?: T,
): Promise<T> => {
	const response = await fetch(`/key/${encodeURIComponent(key)}`);

	let value: T;

	if (response.ok) {
		value = JSON.parse(await response.json()) as T;
	} else {
		if (response.status === 404) {
			value = initialValue;
		} else {
			throw new Error(
				`Failed to fetch value for key '${key}'. Response status: ${response.status}.`,
			);
		}
	}

	if (value === undefined) {
		if (initialValue === undefined) {
			throw new Error(
				`Either ensure the desired value is set or furnish an initial value.`,
			);
		}

		return initialValue;
	}

	return value;
};
