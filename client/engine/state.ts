import { JsonValueOrUndefined } from "../../shared";
import { Key } from "./key";
import { Topic } from "./topic";

export class State<T extends JsonValueOrUndefined> {
  constructor(
    private readonly key: string,
    private readonly defaultValue?: T,
  ) {}

  private get stateChangedTopicName(): string {
    return State.getStateChangedTopicName(this.key);
  }

  public static get = <T extends JsonValueOrUndefined>(
    key: string,
    defaultValue?: T,
  ): T => {
    return Key.get(key, defaultValue);
  };

  public static set = <T extends JsonValueOrUndefined>(
    key: string,
    value: T,
  ): T => {
    const result = Key.set(key, value);

    const stateChangedTopicName = State.getStateChangedTopicName(key);

    Topic.emit(stateChangedTopicName, result);

    return result;
  };

  public static onChanged = <T extends JsonValueOrUndefined>(
    key: string,
    callback: (value: T) => void,
  ): (() => void) => {
    const stateChangedTopicName = State.getStateChangedTopicName(key);

    return Topic.on(stateChangedTopicName, callback);
  };

  protected static getStateChangedTopicName = (key: string): string => {
    return `state:${key}:changed`;
  };

  public get = (): T => {
    return State.get(this.key, this.defaultValue);
  };

  public set = (value: T): T => {
    return State.set(this.key, value);
  };

  public onChanged = (callback: (value: T) => void): (() => void) => {
    return State.onChanged(this.key, callback);
  };
}
