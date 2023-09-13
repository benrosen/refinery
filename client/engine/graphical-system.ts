import { Graphical } from "./graphical";
import { GraphicalComponent } from "./graphical-component";
import { Graphics } from "./graphics";
import { System } from "./system";

new System<Graphical>(
  GraphicalComponent.type,
  undefined,
  (components) => {
    components.forEach((component) => {
      Graphics.createEntity(component.entityId);
    });
  },
  (components) => {
    components.forEach((component) => {
      Graphics.deleteEntity(component.entityId);
    });
  },
);
