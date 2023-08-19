import { JsonValueOrUndefined } from "../../shared";

export class Topic<T extends JsonValueOrUndefined> {
  private static TARGET = new EventTarget();

  constructor(private readonly topic: string) {}

  public static emit = <T extends JsonValueOrUndefined>(
    topic: string,
    value: T,
  ): T => {
    Topic.TARGET.dispatchEvent(new CustomEvent(topic, { detail: value }));

    return value;
  };

  public static on = <T extends JsonValueOrUndefined>(
    topic: string,
    callback: (value: T) => void,
  ): (() => void) => {
    const handler = (event: CustomEvent<T>) => {
      callback(event.detail);
    };

    Topic.TARGET.addEventListener(topic, handler);

    return () => {
      Topic.TARGET.removeEventListener(topic, handler);
    };
  };

  public emit = (value: T): T => {
    return Topic.emit<T>(this.topic, value);
  };

  public on = (callback: (value: T) => void): (() => void) => {
    return Topic.on<T>(this.topic, callback);
  };
}
