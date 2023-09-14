import { v4 as createUuid } from "uuid";
import { Component } from "./component";

export class Entity {
  constructor(public readonly id: string = createUuid()) {}

  public get components(): Component[] {
    return Component.getByEntityId(this.id);
  }

  public static readonly find = (id: string): Entity => {
    return new Entity(id);
  };

  public static spawn = () => new Entity();

  public static readonly destroy = (id: string): void => {
    Component.deleteByEntityId(id);
  };

  public readonly deleteComponent = (id: string): void => {
    Component.delete(id);
  };

  public readonly deleteComponentsByType = (type: string): void => {
    Component.deleteByEntityIdAndType(this.id, type);
  };

  public readonly delete = (): void => {
    Entity.destroy(this.id);
  };

  public readonly getComponent = <T extends Component>(
    id: string,
  ): T | undefined => {
    return Component.get(id) as T;
  };

  public readonly getComponentByType = <T extends Component>(
    type: string,
  ): T | undefined => {
    return Component.getByEntityIdByType(this.id, type) as T;
  };
}
