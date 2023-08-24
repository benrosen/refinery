import { randomUUID } from "crypto";
import { JsonValue } from "../../shared";
import { Component } from "./component";

export class System<T extends JsonValue = JsonValue> {
  private static readonly systems: System[] = [];

  constructor(
    public readonly type: string,
    private readonly onUpdate: (component: Component<T>) => Promise<void>,
    public readonly id: string = randomUUID(),
  ) {
    System.systems.push(this);
  }

  public static readonly update = async (): Promise<void> => {
    await Promise.all(
      System.systems.flatMap((system) => {
        const components = Component.getByType(system.type);

        return components.map((component) => {
          return system.onUpdate(component);
        });
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
    onUpdate: (component: Component<T>) => Promise<void>,
  ): System<T> => {
    return new System<T>(type, onUpdate);
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

  public readonly update = async (component: Component<T>) => {
    await this.onUpdate(component);
  };

  public readonly delete = (): void => {
    System.delete(this.id);
  };
}
