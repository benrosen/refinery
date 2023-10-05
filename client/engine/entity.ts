import { v4 as createUuid } from "uuid";
import { Component } from "./component";

export class Entity {
  constructor(public readonly id: string = createUuid()) {}

  public get components(): Component[] {
    return Component.getByEntityId(this.id);
  }

  public static readonly select = (id: string) => {
    return new Entity(id);
  };

  public static readonly selectAll = (): Entity[] => {
    const allComponents = Component.getAll();

    const allEntityIds = allComponents.map((component) => component.entityId);

    const uniqueEntityIds = [...new Set(allEntityIds)];

    return uniqueEntityIds.map((entityId) => new Entity(entityId));
  };

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

  public readonly getComponentsByType = <T extends Component>(
    type: string,
  ): T[] => {
    return Component.getByEntityIdByType(this.id, type);
  };
}
