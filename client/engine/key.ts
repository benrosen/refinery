import { JsonValueOrUndefined } from "../../shared";

/**
 * The `Key` class lets you get and set values in memory.
 */
export class Key<T extends JsonValueOrUndefined> {
  private static readonly store = new Map<string, JsonValueOrUndefined>();

  /**
   * Create a new `Key` instance.
   *
   * @param key - The key to get or set.
   * @param defaultValue - The default value to set if the key doesn't exist.
   */
  constructor(
    private readonly key: string,
    private readonly defaultValue?: JsonValueOrUndefined,
  ) {
    Key.set(key, defaultValue);
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
   * const name = Key.get("name", "Anonymous"); // Get the "name" key, or set it to "Anonymous" if it doesn't exist.
   * console.log(name); // The name is "Anonymous".
   */
  public static get = <T extends JsonValueOrUndefined>(
    key: string,
    defaultValue?: T,
  ): T => {
    const value = Key.store.get(key) as T;

    if (value === undefined) {
      return defaultValue;
    }

    return value;
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
   * Key.set("name", "John"); // Set the "name" key to "John".
   */
  public static set = <T extends JsonValueOrUndefined>(
    key: string,
    value: T,
  ): T => {
    Key.store.set(key, value);

    return value;
  };

  /**
   * Get the value for the key.
   *
   * @returns The value for the key.
   *
   * @example Get a "name" value.
   * const name = new Key("name", "Anonymous"); // Set the "name" key to "Anonymous" and create a new Key instance.
   * console.log(name.get()); // The name is "Anonymous".
   */
  public get = (): T => {
    return Key.get<T>(this.key, this.defaultValue as T);
  };

  /**
   * Set the value for the key.
   *
   * @param value - The value to set.
   *
   * @returns The value that was set.
   *
   * @example Set a "name" value.
   * const name = new Key("name", "Anonymous"); // Set the "name" key to "Anonymous" and create a new Key instance.
   * name.set("John"); // Set the name to "John".
   */
  public set = (value: T): T => {
    return Key.set<T>(this.key, value);
  };
}
