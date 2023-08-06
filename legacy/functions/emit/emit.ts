import { JsonValue } from "../../../shared";

/**
 * Sends a message to a specified topic through an HTTP POST request.
 *
 * The `emit` function communicates with a server endpoint, denoted by the topic name provided.
 * The message data should be a JSON serializable object, or it can also be undefined.
 * It leverages the Fetch API to send messages and expects the server to respond
 * with an HTTP success status. If the request encounters any errors or the server responds
 * with a non-successful HTTP status, an error is thrown.
 *
 * @typeParam T - Represents the message data type. This can be any JSON serializable object
 *                or undefined. The type ensures safe and consistent data handling.
 *
 * @param topic - A string that represents the topic or channel to which the message should be sent.
 *                The function will construct a URL endpoint using this topic.
 *
 * @param data  - The actual data or message to be sent. It is optional and can be any JSON serializable
 *                value, including undefined. The data is sent as the request body.
 *
 * @throws {Error} - If the server returns a non-successful HTTP status (i.e., not in the 2xx range),
 *                   an error is thrown with the status text provided by the server.
 *
 * @example
 * ```typescript
 *   try {
 *     await emit('testTopic', { key: 'value' });
 *     console.log('Message sent successfully');
 *   } catch (error) {
 *     console.error('Failed to send message:', error.message);
 *   }
 * ```
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API} - For more details about the Fetch API.
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/JSON} - For a deep dive into JSON and its specifications.
 */
export const emit = async <T extends JsonValue | undefined>(
	topic: string,
	data?: T,
): Promise<void> => {
	const response = await fetch(`/topic/${encodeURIComponent(topic)}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}
};
