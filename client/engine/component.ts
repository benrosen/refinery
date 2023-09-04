import { randomUUID } from "crypto";
import { JsonValue } from "../../shared";
import { State } from "./state";

export class Component<T extends JsonValue = JsonValue> {
  private static readonly components: Component[] = [];

  private readonly _value: State<T>;

  constructor(
    public readonly type: string,
    public readonly entityId: string,
    value: T,
    public readonly id: string = randomUUID(),
  ) {
    this._value = new State(this.id, value);

    Component.components.push(this);
  }

  public get value(): T {
    return this._value.get();
  }

  public set value(value: T) {
    this._value.set(value);
  }

  public static readonly get = (id: string): Component | undefined => {
    return Component.components.find((component) => component.id === id);
  };

  public static readonly getByEntityId = (entityId: string): Component[] => {
    return Component.components.filter(
      (component) => component.entityId === entityId,
    );
  };

  public static readonly getByType = (type: string): Component[] => {
    return Component.components.filter((component) => component.type === type);
  };

  public static readonly create = <T extends JsonValue>(
    type: string,
    entityId: string,
    value: T,
  ): Component<T> => {
    return new Component<T>(type, entityId, value);
  };

  public static readonly delete = (id: string): void => {
    const index = Component.components.findIndex(
      (component) => component.id === id,
    );

    if (index === -1) {
      return;
    }

    Component.components.splice(index, 1);
  };

  public static readonly deleteByEntityId = (entityId: string): void => {
    const components = Component.components.filter(
      (component) => component.entityId === entityId,
    );

    components.forEach((component) => Component.delete(component.id));
  };

  public static readonly deleteByType = (type: string): void => {
    const components = Component.components.filter(
      (component) => component.type === type,
    );

    components.forEach((component) => Component.delete(component.id));
  };

  public static readonly deleteByEntityIdAndType = (
    entityId: string,
    type: string,
  ): void => {
    const components = Component.components.filter(
      (component) => component.entityId === entityId && component.type === type,
    );

    components.forEach((component) => Component.delete(component.id));
  };

  public static readonly deleteAll = (): void => {
    Component.components.length = 0;
  };

  public readonly onValueChanged = (
    // TODO should this callback get the component instead? then it could do component.value
    callback: (value: T) => void,
  ): (() => void) => {
    return this._value.onChanged(callback);
  };

  public readonly delete = (): void => {
    Component.delete(this.id);
  };
}
