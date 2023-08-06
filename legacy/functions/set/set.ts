import { JsonValue } from "../../../shared";

/**
 * Asynchronously sets a value associated with a specified key using a HTTP POST request.
 *
 * The function uses the fetch API to send the value to the '/key' endpoint. It throws an error if the request fails.
 *
 * @typeParam T - The type of the value to be set. It extends from `JsonValue`, which means it can be any JSON serializable value.
 * @param key - The key with which the value should be associated. It should be a string.
 * @param value - The value to be set. It can be of any type that extends from `JsonValue`.
 * @returns A Promise that resolves to void. It does not return any value upon successful execution. If the HTTP request fails, it throws an error with the HTTP status text.
 *
 * @example
 * await set('testKey', { key: 'value' }); // Sets the object { key: 'value' } associated with the 'testKey'.
 *
 * @throws Error Will throw an error if the response status from the fetch request is not ok.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API Fetch API
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 */
export const set = async <T extends JsonValue>(
	key: string,
	value: T,
): Promise<void> => {
	const response = await fetch(`/key/${encodeURIComponent(key)}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(value),
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}
};
