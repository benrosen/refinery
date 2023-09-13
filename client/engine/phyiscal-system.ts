import { Physical } from "./physical";
import { PhysicalComponent } from "./physical-component";
import { Physics } from "./physics";
import { System } from "./system";

new System<Physical>(
  PhysicalComponent.type,
  undefined,
  (components) => {
    components.forEach((component) => {
      Physics.createEntity(component.entityId);
    });
  },
  (components) => {
    components.forEach((component) => {
      Physics.deleteEntity(component.entityId);
    });
  },
);
