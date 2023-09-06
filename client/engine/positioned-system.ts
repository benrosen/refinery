import { Entity } from "./entity";
import { Graphics } from "./graphics";
import { MassiveComponent } from "./massive-component";
import { Physics } from "./physics";
import { Positioned } from "./positioned";
import { PositionedComponent } from "./positioned-component";
import { System } from "./system";

new System<Positioned>(
  PositionedComponent.type,
  async ({ x, y, z, entityId }: PositionedComponent) => {
    const entity = new Entity(entityId);

    const massiveComponent = entity.getComponentByType(
      MassiveComponent.type,
    ) as MassiveComponent | undefined;

    const mass = massiveComponent?.mass ?? 0;

    const physicalEntity = Physics.getEntityById(entityId);

    if (physicalEntity === undefined) {
      throw new Error(
        `Entity with id ${entityId} does not exist in physics engine.`,
      );
    }

    if (mass === 0) {
      physicalEntity.position.x = x;
      physicalEntity.position.y = y;
      physicalEntity.position.z = z;
    }

    const graphicalEntity = Graphics.getEntityById(entityId);

    if (graphicalEntity === undefined) {
      throw new Error(
        `Entity with id ${entityId} does not exist in graphics engine.`,
      );
    }

    graphicalEntity.position.x = physicalEntity.position.x;
    graphicalEntity.position.y = physicalEntity.position.y;
    graphicalEntity.position.z = physicalEntity.position.z;
  },
);
