import { JsonValueOrUndefined } from "../../shared";

/**
 * The `Topic` class lets you emit and listen for events.
 */
export class Topic<T extends JsonValueOrUndefined> {
  private static readonly target = new EventTarget();

  /**
   * Create a new `Topic` instance.
   *
   * @param topic - The topic to emit and listen for events on.
   */
  constructor(private readonly topic: string) {}

  /**
   * Emit an event to a topic.
   *
   * @param topic - The topic to emit the event to.
   * @param value - The value to emit.
   *
   * @returns The value that was emitted.
   *
   * @example Emit a "name" event.
   * Topic.emit("name", "John"); // Emit the "name" event with the value "John".
   */
  public static emit = <T extends JsonValueOrUndefined>(
    topic: string,
    value?: T,
  ): T => {
    Topic.target.dispatchEvent(new CustomEvent(topic, { detail: value }));

    return value;
  };

  /**
   * Listen for events on a topic.
   *
   * @param topic - The topic to listen for events on.
   * @param callback - The callback to invoke when an event is emitted.
   *
   * @returns A function that removes the event listener.
   *
   * @example Listen for a "name" event.
   * const off = Topic.on("name", (name) => {
   *     console.log(name); // The name is "John".
   * })
   *
   * off(); // Stop listening for the "name" event.
   */
  public static on = <T extends JsonValueOrUndefined>(
    topic: string,
    callback: (value: T) => void,
  ): (() => void) => {
    const handler = (event: CustomEvent<T>) => {
      callback(event.detail);
    };

    Topic.target.addEventListener(topic, handler);

    return () => {
      Topic.target.removeEventListener(topic, handler);
    };
  };

  /**
   * Emit an event to the topic.
   *
   * @param value - The value to emit.
   *
   * @returns The value that was emitted.
   *
   * @example Emit a "name" event.
   * const name = new Topic("name"); // Create a new Topic instance.
   * name.emit("John"); // Emit the "name" event with the value "John".
   */
  public emit = (value: T): T => {
    return Topic.emit<T>(this.topic, value);
  };

  /**
   * Listen for events on the topic.
   *
   * @param callback - The callback to invoke when an event is emitted.
   *
   * @returns A function that removes the event listener.
   *
   * @example Listen for a "name" event
   * const name = new Topic("name"); // Create a new Topic instance.
   * const off = name.on((name) => {
   *     console.log(name); // The name is "John".
   * })
   * off(); // Stop listening for the "name" event.
   */
  public on = (callback: (value: T) => void): (() => void) => {
    return Topic.on<T>(this.topic, callback);
  };
}
