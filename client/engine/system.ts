import { v4 as createUuid } from "uuid";
import { JsonValue } from "../../shared";
import { Component } from "./component";

export class System<T extends JsonValue = JsonValue> {
  private static readonly systems: System[] = [];

  private previousComponents: Component<T>[] = [];

  constructor(
    public readonly type: string,
    private readonly onComponentsUpdated?: (
      components: Component<T>[],
    ) => Promise<void>,
    private readonly onComponentsAdded?: (components: Component<T>[]) => void,
    private readonly onComponentsRemoved?: (components: Component<T>[]) => void,
    public readonly id: string = createUuid(),
  ) {
    System.systems.push(this);
  }

  public static readonly update = async (): Promise<void> => {
    await Promise.all(
      System.systems.map((system) => {
        const components = Component.getByType(system.type);

        system.update(components);
      }),
    );
  };

  public static readonly get = (id: string): System | undefined => {
    return System.systems.find((system) => system.id === id);
  };

  public static readonly getByType = (type: string): System[] => {
    return System.systems.filter((system) => system.type === type);
  };

  public static readonly create = <T extends JsonValue>(
    type: string,
    onUpdate?: (components: Component<T>[]) => Promise<void>,
    onComponentsAdded?: (components: Component<T>[]) => void,
    onComponentsRemoved?: (components: Component<T>[]) => void,
  ): System<T> => {
    return new System<T>(
      type,
      onUpdate,
      onComponentsAdded,
      onComponentsRemoved,
    );
  };

  public static readonly delete = (id: string): void => {
    const index = System.systems.findIndex((system) => system.id === id);

    if (index === -1) {
      return;
    }

    System.systems.splice(index, 1);
  };

  public static readonly deleteByType = (type: string): void => {
    const systems = System.systems.filter((system) => system.type === type);

    systems.forEach((system) => System.delete(system.id));
  };

  public static readonly deleteAll = (): void => {
    System.systems.length = 0;
  };

  public readonly update = async (components: Component<T>[]) => {
    const componentsToAdd = components.filter(
      (component) => !this.previousComponents.includes(component),
    );

    const componentsToRemove = this.previousComponents.filter(
      (component) => !components.includes(component),
    );

    if (this.onComponentsUpdated) {
      await this.onComponentsUpdated(components);
    }

    if (this.onComponentsAdded) {
      this.onComponentsAdded(componentsToAdd);
    }

    if (this.onComponentsRemoved) {
      this.onComponentsRemoved(componentsToRemove);
    }

    this.previousComponents = components;
  };

  public readonly delete = (): void => {
    System.delete(this.id);
  };
}
