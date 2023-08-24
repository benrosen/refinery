import { randomUUID } from "crypto";
import { JsonValue } from "../../shared";
import { Component } from "./component";

export class Entity {
  constructor(public readonly id: string = randomUUID()) {}

  public get components(): Component[] {
    return Component.getByEntityId(this.id);
  }

  public static create = () => new Entity();

  public static readonly delete = (id: string): void => {
    Component.deleteByEntityId(id);
  };

  public readonly createComponent = <T extends JsonValue>(
    type: string,
    value: T,
  ): Component<T> => {
    return Component.create(type, this.id, value);
  };

  public readonly deleteComponent = (id: string): void => {
    Component.delete(id);
  };

  public readonly deleteComponentsByType = (type: string): void => {
    Component.deleteByEntityIdAndType(this.id, type);
  };

  public readonly delete = (): void => {
    Entity.delete(this.id);
  };
}