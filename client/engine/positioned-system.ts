import { Entity } from "./entity";
import { Graphics } from "./graphics";
import { MassiveComponent } from "./massive-component";
import { Physics } from "./physics";
import { Positioned } from "./positioned";
import { PositionedComponent } from "./positioned-component";
import { System } from "./system";

new System<Positioned>(
  PositionedComponent.type,
  async (components: PositionedComponent[]) => {
    components.forEach(({ x, y, z, entityId }: PositionedComponent) => {
      const entity = new Entity(entityId);

      const massiveComponent = entity.getComponentByType(
        MassiveComponent.type,
      ) as MassiveComponent | undefined;

      const mass = massiveComponent?.mass ?? 0;

      const physicalEntity = Physics.getEntityById(entityId);

      if (physicalEntity) {
        if (mass === 0) {
          physicalEntity.position.x = x;
          physicalEntity.position.y = y;
          physicalEntity.position.z = z;
        } else {
          console.warn(
            `Entity with id ${entityId} has non-zero mass but no associated physical entity.`,
          );
        }
      }

      const graphicalEntity = Graphics.getEntityById(entityId);

      if (graphicalEntity) {
        if (physicalEntity) {
          graphicalEntity.position.x = physicalEntity.position.x;
          graphicalEntity.position.y = physicalEntity.position.y;
          graphicalEntity.position.z = physicalEntity.position.z;
        } else {
          graphicalEntity.position.x = x;
          graphicalEntity.position.y = y;
          graphicalEntity.position.z = z;
        }
      }
    });
  },
);
