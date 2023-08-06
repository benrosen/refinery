import { JsonValue } from "../../shared";
import { emit } from "./emit/emit";

/**
 * Returns a function that publishes data to a specified topic using the `emit` function.
 *
 * The function that's returned will, when called with data, asynchronously publish that data to the specified topic.
 *
 * @typeParam T - The type of the data to be published. It extends from `JsonValue | undefined`, which means it can be any JSON serializable value, or undefined.
 * @param topic - The topic to which the data should be published. It should be a string.
 * @returns A function that takes data of type `T` and returns a Promise that resolves to `void`. This function, when called, will asynchronously publish the data to the specified topic.
 *
 * @example
 * const publishScore = usePublication<number>('score');
 *
 * await publishScore(100); // Publishes the value 100 to the topic 'score'.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/JSON JSON
 * {@link emit}
 */
export const usePublication = <T extends JsonValue | undefined>(
	topic: string,
): ((data: T) => Promise<void>) => {
	return async (data: T) => {
		return await emit(topic, data);
	};
};
