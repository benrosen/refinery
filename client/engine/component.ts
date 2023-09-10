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

  protected get value(): T {
    return this._value.get();
  }

  protected set value(value: T) {
    this._value.set(value);
  }

  public static readonly get = <T extends Component>(
    id: string,
  ): T | undefined => {
    return Component.components.find((component) => component.id === id) as
      | T
      | undefined;
  };

  public static readonly getByEntityId = (entityId: string): Component[] => {
    return Component.components.filter(
      (component) => component.entityId === entityId,
    );
  };

  public static readonly getByType = <T extends Component>(
    type: string,
  ): T[] => {
    return Component.components.filter(
      (component) => component.type === type,
    ) as T[];
  };

  public static readonly getByEntityIdByType = <T extends Component>(
    entityId: string,
    type: string,
  ): T | undefined => {
    return Component.components.find(
      (component) => component.entityId === entityId && component.type === type,
    ) as T | undefined;
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
    const components = Component.getByEntityId(entityId);

    components.forEach((component) => Component.delete(component.id));
  };

  public static readonly deleteByType = (type: string): void => {
    const components = Component.getByType(type);

    components.forEach((component) => Component.delete(component.id));
  };

  public static readonly deleteByEntityIdAndType = (
    entityId: string,
    type: string,
  ): void => {
    const component = Component.getByEntityIdByType(entityId, type);

    Component.delete(component.id);
  };

  public static readonly deleteAll = (): void => {
    Component.components.length = 0;
  };

  public readonly delete = (): void => {
    Component.delete(this.id);
  };

  protected readonly onValueChanged = (
    callback: (value: { previousValue: T; nextValue: T }) => void,
  ): (() => void) => {
    return this._value.onChanged(callback);
  };
}
