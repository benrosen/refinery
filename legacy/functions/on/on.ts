import { JsonValue } from "../../../shared";

/**
 * Sets up a listener for a specified topic using the EventSource API.
 *
 * The function opens a persistent connection to the '/topic' endpoint, and listens for messages on the specified topic.
 * It then parses the incoming data from the message event and passes it to a provided handler function.
 *
 * @typeParam T - The expected type of the data to be received with the message. It extends from `JsonValue | undefined`, which means it can be any JSON serializable value, or undefined.
 * @param topic - The topic to which the listener should be set up. It should be a string.
 * @param handler - The function that will handle incoming messages. It takes one argument of the type `T`.
 * @returns A function that, when called, will remove the event listener and close the EventSource.
 *
 * @example
 * const unsubscribe = on('testTopic', data => console.log(data)); // Sets up a listener on 'testTopic', and logs any received data.
 * unsubscribe(); // Closes the listener when no longer needed.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventSource EventSource API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent MessageEvent
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 */
export const on = <T extends JsonValue | undefined>(
	topic: string,
	handler: (data: T) => void,
): (() => void) => {
	const eventSource = new EventSource(`/topic/${encodeURIComponent(topic)}`);

	const eventListener = (event: MessageEvent) => {
		const data = JSON.parse(event.data) as T;
		handler(data);
	};

	eventSource.addEventListener(topic, eventListener);

	return () => {
		eventSource.removeEventListener(topic, eventListener);
		eventSource.close();
	};
};
