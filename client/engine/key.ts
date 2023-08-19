import { JsonValueOrUndefined } from "../../shared";

export class Key<T extends JsonValueOrUndefined> {
  private static STORE = new Map<string, JsonValueOrUndefined>();

  constructor(
    private readonly key: string,
    private readonly defaultValue?: JsonValueOrUndefined,
  ) {}

  public static get = <T extends JsonValueOrUndefined>(
    key: string,
    defaultValue?: T,
  ): T => {
    return (Key.STORE.get(key) as T) || defaultValue;
  };

  public static set = <T extends JsonValueOrUndefined>(
    key: string,
    value: T,
  ): T => {
    Key.STORE.set(key, value);

    return value;
  };

  public get = (): T => {
    return Key.get<T>(this.key, this.defaultValue as T);
  };

  public set = (value: T): T => {
    return Key.set<T>(this.key, value);
  };
}
