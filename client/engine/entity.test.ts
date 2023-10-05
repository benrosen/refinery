import { v4 as createUuid } from "uuid";
import { JsonValue } from "../../shared";
import { Component as AbstractComponent } from "./component";
import { Entity } from "./entity";

class TestComponent<
  T extends JsonValue = JsonValue,
> extends AbstractComponent<T> {
  constructor(
    type: string,
    entityId: string,
    value: T,
    id: string = createUuid(),
  ) {
    super(type, entityId, value, id);
  }
}

afterEach(() => {
  Entity.selectAll().forEach((entity) => entity.delete());
});

describe("The Entity class", () => {
  describe("constructor", () => {
    it("should create an entity with the given id", () => {
      const testId = createUuid();

      const testEntity = new Entity(testId);

      expect(testEntity.id).toBe(testId);
    });
  });

  describe("components getter", () => {
    it("should return all of the components that are associated with the entity", () => {
      const testEntity = new Entity();

      expect(testEntity.components).toEqual([]);

      const testComponent1 = new TestComponent(
        createUuid(),
        testEntity.id,
        createUuid(),
      );

      const testComponent2 = new TestComponent(
        createUuid(),
        testEntity.id,
        createUuid(),
      );

      expect(testEntity.components).toEqual([testComponent1, testComponent2]);
    });

    it("should return an empty array if there are no components associated with the entity", () => {
      const testEntity = new Entity();

      expect(testEntity.components).toEqual([]);
    });
  });

  describe("deleteComponent method", () => {
    it("should delete the component with the given id", () => {
      const testEntity = new Entity();

      const testComponent = new TestComponent(
        createUuid(),
        testEntity.id,
        createUuid(),
      );

      expect(testEntity.components).toEqual([testComponent]);

      testEntity.deleteComponent(testComponent.id);

      expect(testEntity.components).toEqual([]);
    });
  });

  describe("deleteComponentsByType method", () => {
    it("should delete all components with the given type from the entity", () => {
      const testEntity = new Entity();

      const testType1 = createUuid();

      const testType2 = createUuid();

      const testComponent1 = new TestComponent(
        testType1,
        testEntity.id,
        createUuid(),
      );

      const testComponent2 = new TestComponent(
        testType2,
        testEntity.id,
        createUuid(),
      );

      const testComponent3 = new TestComponent(
        testType1,
        testEntity.id,
        createUuid(),
      );

      expect(testEntity.components).toEqual([
        testComponent1,
        testComponent2,
        testComponent3,
      ]);

      testEntity.deleteComponentsByType(testType1);

      expect(testEntity.components).toEqual([testComponent2]);
    });
  });

  describe("delete method", () => {
    it("should delete the entity", () => {
      const testEntity = new Entity();

      new TestComponent(createUuid(), testEntity.id, createUuid());

      expect(Entity.selectAll().toString()).toBe([testEntity].toString());

      testEntity.delete();

      expect(Entity.selectAll()).toEqual([]);
    });

    it("should delete all components associated with the entity", () => {
      const testEntity = new Entity();

      const testComponent = new TestComponent(
        createUuid(),
        testEntity.id,
        createUuid(),
      );

      expect(testEntity.components.toString()).toBe([testComponent].toString());

      testEntity.delete();

      expect(testEntity.components).toEqual([]);
    });
  });

  describe("getComponentsByType method", () => {
    it("should return the component with the given type that is associated with the entity", () => {
      const testEntity = new Entity();

      const testType = createUuid();

      expect(testEntity.getComponentsByType(testType)).toEqual([]);

      const testComponent1 = new TestComponent(
        testType,
        testEntity.id,
        createUuid(),
      );

      const testComponent2 = new TestComponent(
        createUuid(),
        testEntity.id,
        createUuid(),
      );

      expect(testEntity.getComponentsByType(testType)).toEqual([
        testComponent1,
      ]);
    });

    it("should return undefined if there is no component with the given type that is associated with the entity", () => {
      const testEntity = new Entity();

      const testType = createUuid();

      expect(testEntity.getComponentsByType(testType)).toEqual([]);
    });
  });

  describe("static", () => {
    describe("select method", () => {
      it("should return an entity with the given id", () => {
        const testId = createUuid();

        const testEntity = new Entity(testId);

        expect(Entity.select(testId).id).toBe(testEntity.id);
      });
    });

    // TODO there is a problem with the selectAll method....
    describe("selectAll method", () => {
      it("should return all entities", () => {
        const testEntity1 = new Entity();

        const testEntity2 = new Entity();

        new TestComponent(createUuid(), testEntity1.id, createUuid());

        new TestComponent(createUuid(), testEntity2.id, createUuid());

        const allEntities = Entity.selectAll();

        expect(allEntities).toHaveLength(2);

        expect(allEntities[0].id).toEqual(testEntity1.id);

        expect(allEntities[1].id).toEqual(testEntity2.id);
      });
    });

    describe("destroy method", () => {
      it("should delete the entity with the given id", () => {
        const testId = createUuid();

        const testEntity = new Entity(testId);

        new TestComponent(createUuid(), testEntity.id, createUuid());

        expect(Entity.selectAll()).toHaveLength(1);

        Entity.destroy(testId);

        expect(Entity.selectAll()).toHaveLength(0);
      });
    });
  });
});
