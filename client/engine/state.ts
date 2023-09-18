import { JsonValueOrUndefined } from "../../shared";
import { Key } from "./key";
import { Topic } from "./topic";

/**
 * The `State` class lets you get and set values in memory and listen for changes.
 */
export class State<T extends JsonValueOrUndefined> {
  /**
   * Create a new `State` instance.
   *
   * @param key - The key to get or set.
   * @param defaultValue - The default value to set if the key doesn't exist.
   */
  constructor(
    private readonly key: string,
    private readonly defaultValue?: T,
  ) {
    Key.set(key, defaultValue);
  }

  private get stateChangedTopicName(): string {
    return State.getStateChangedTopicName(this.key);
  }

  /**
   * Get a value from memory.
   *
   * @param key - The key to get.
   * @param defaultValue - The default value to return if the key doesn't exist.
   *
   * @returns The value for the key, or the default value if the key doesn't exist.
   *
   * @example Get a "name" value.
   * const name = State.get("name", "Anonymous"); // Get the "name" key, or set it to "Anonymous" if it doesn't exist.
   * console.log(name); // The name is "Anonymous".
   */
  public static get = <T extends JsonValueOrUndefined>(
    key: string,
    defaultValue?: T,
  ): T => {
    return Key.get(key, defaultValue);
  };

  /**
   * Set a value in memory.
   *
   * @param key - The key to set.
   * @param value - The value to set.
   *
   * @returns The value that was set.
   *
   * @example Set a "name" value.
   * State.set("name", "John"); // Set the "name" key to "John".
   */
  public static set = <T extends JsonValueOrUndefined>(
    key: string,
    value: T,
  ): T => {
    const previousValue = State.get(key) as T;

    const nextValue = Key.set(key, value);

    if (previousValue === nextValue) {
      return nextValue;
    }

    const stateChangedTopicName = State.getStateChangedTopicName(key);

    Topic.emit(stateChangedTopicName, {
      previousValue,
      nextValue,
    });

    return nextValue;
  };

  /**
   * Listen for changes to a key and invoke a callback when the value changes.
   *
   * @param key - The key to listen for changes on.
   * @param callback - The callback to invoke when the value changes.
   *
   * @returns A function that removes the event listener.
   *
   * @example Listen for changes to a "name" key.
   * const off = State.onChanged("name", ({ previousValue, nextValue }) => {
   *     console.log(previousValue); // The previous value is "Anonymous".
   * })
   * off(); // Stop listening for changes to the "name" key.
   */
  public static onChanged = <T extends JsonValueOrUndefined>(
    key: string,
    callback: (value: { previousValue: T; nextValue: T }) => void,
  ): (() => void) => {
    const stateChangedTopicName = State.getStateChangedTopicName(key);

    return Topic.on(stateChangedTopicName, callback);
  };

  protected static getStateChangedTopicName = (key: string): string => {
    return `state:${key}:changed`;
  };

  /**
   * Get the value for the key.
   *
   * @returns The value for the key.
   *
   * @example Get a "name" value.
   * const name = new State("name", "Anonymous"); // Set the "name" key to "Anonymous" and create a new Key instance.
   * console.log(name.get()); // The name is "Anonymous".
   */
  public get = (): T => {
    return State.get(this.key, this.defaultValue);
  };

  /**
   * Set the value for the key.
   *
   * @param value - The value to set.
   *
   * @returns The value that was set.
   *
   * @example Set a "name" value.
   * const name = new State("name", "Anonymous"); // Set the "name" key to "Anonymous" and create a new Key instance.
   * name.set("John"); // Set the name to "John".
   */
  public set = (value: T): T => {
    return State.set(this.key, value);
  };

  /**
   * Listen for changes to the key and invoke a callback when the value changes.
   *
   * @param callback - The callback to invoke when the value changes.
   *
   * @returns A function that removes the event listener.
   *
   * @example Listen for changes to a "name" key.
   * const name = new State("name", "Anonymous"); // Set the "name" key to "Anonymous" and create a new Key instance.
   * const off = name.onChanged(({ previousValue, nextValue }) => {
   *     console.log(previousValue); // The previous value is "Anonymous".
   * })
   * off(); // Stop listening for changes to the "name" key.
   */
  public onChanged = (
    callback: (value: { previousValue: T; nextValue: T }) => void,
  ): (() => void) => {
    return State.onChanged(this.key, callback);
  };
}
