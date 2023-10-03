import { v4 as createUuid } from "uuid";
import { JsonValue } from "../../shared";
import { Component as AbstractComponent } from "./component";

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

describe("The Component class", () => {
  describe("constructor", () => {
    it("should create a component with the provided property values", () => {
      const testComponentType = createUuid();

      const testId = createUuid();

      const testEntityId = createUuid();

      const testValue = createUuid();

      expect(TestComponent.get(testId)).toBe(undefined);

      const testComponent = new TestComponent(
        testComponentType,
        testEntityId,
        testValue,
        testId,
      );

      expect(testComponent.id).toBe(testId);

      expect(testComponent.type).toBe(testComponentType);

      expect(testComponent.entityId).toBe(testEntityId);

      const testComponentGotById = TestComponent.get(testId);

      expect(testComponentGotById).toBe(testComponent);
    });
  });

  describe("delete method", () => {
    it("should delete the component", () => {
      const testId = createUuid();

      const testComponent = new TestComponent(
        createUuid(),
        createUuid(),
        createUuid(),
        testId,
      );

      expect(TestComponent.get(testId)).toBe(testComponent);

      testComponent.delete();

      expect(TestComponent.get(testId)).toBe(undefined);
    });
  });

  describe("static", () => {
    describe("get method", () => {
      it("should return the component with the provided id", () => {
        const testId = createUuid();

        expect(TestComponent.get(testId)).toBe(undefined);

        const testComponent = new TestComponent(
          createUuid(),
          createUuid(),
          createUuid(),
          testId,
        );

        expect(TestComponent.get(testId)).toBe(testComponent);
      });

      it("should return undefined if no component with the provided id exists", () => {
        const testId = createUuid();

        expect(TestComponent.get(testId)).toBe(undefined);
      });
    });

    describe("getByEntityId method", () => {
      it("should return all components with the provided entityId", () => {
        const testEntityId1 = createUuid();

        const testEntityId2 = createUuid();

        const testComponentId1 = createUuid();

        const testComponentId2 = createUuid();

        const testComponentId3 = createUuid();

        expect(TestComponent.getByEntityId(testEntityId1)).toEqual([]);

        expect(TestComponent.getByEntityId(testEntityId2)).toEqual([]);

        const testComponent1 = new TestComponent(
          createUuid(),
          testEntityId1,
          createUuid(),
          testComponentId1,
        );

        const testComponent2 = new TestComponent(
          createUuid(),
          testEntityId1,
          createUuid(),
          testComponentId2,
        );

        const testComponent3 = new TestComponent(
          createUuid(),
          testEntityId2,
          createUuid(),
          testComponentId3,
        );

        expect(TestComponent.getByEntityId(testEntityId1)).toEqual([
          testComponent1,
          testComponent2,
        ]);

        expect(TestComponent.getByEntityId(testEntityId2)).toEqual([
          testComponent3,
        ]);
      });

      it("should return an empty array if no components with the provided entityId exist", () => {
        const testEntityId = createUuid();

        expect(TestComponent.getByEntityId(testEntityId)).toEqual([]);
      });
    });

    describe("getByType method", () => {
      it("should return all components with the provided type", () => {
        const testType1 = createUuid();

        const testType2 = createUuid();

        const testComponentId1 = createUuid();

        const testComponentId2 = createUuid();

        const testComponentId3 = createUuid();

        expect(TestComponent.getByType(testType1)).toEqual([]);

        expect(TestComponent.getByType(testType2)).toEqual([]);

        const testComponent1 = new TestComponent(
          testType1,
          createUuid(),
          createUuid(),
          testComponentId1,
        );

        const testComponent2 = new TestComponent(
          testType1,
          createUuid(),
          createUuid(),
          testComponentId2,
        );

        const testComponent3 = new TestComponent(
          testType2,
          createUuid(),
          createUuid(),
          testComponentId3,
        );

        expect(TestComponent.getByType(testType1)).toEqual([
          testComponent1,
          testComponent2,
        ]);

        expect(TestComponent.getByType(testType2)).toEqual([testComponent3]);
      });

      it("should return an empty array if no components with the provided type exist", () => {
        const testType = createUuid();

        expect(TestComponent.getByType(testType)).toEqual([]);
      });
    });

    describe("getByEntityIdByType method", () => {
      it("should return the component with the provided entityId and type", () => {
        const testType = createUuid();

        const testEntityId = createUuid();

        const testComponent1 = new TestComponent(
          testType,
          testEntityId,
          createUuid(),
          createUuid(),
        );

        expect(TestComponent.getByEntityIdByType(testEntityId, testType)).toBe(
          testComponent1,
        );
      });

      it("should return undefined if no component with the provided entityId and type exists", () => {
        const testType = createUuid();

        const testEntityId = createUuid();

        expect(TestComponent.getByEntityIdByType(testEntityId, testType)).toBe(
          undefined,
        );
      });
    });

    describe("delete method", () => {
      it("should delete the component with the provided id", () => {
        const testId = createUuid();

        const testComponent = new TestComponent(
          createUuid(),
          createUuid(),
          createUuid(),
          testId,
        );

        expect(TestComponent.get(testId)).toBe(testComponent);

        TestComponent.delete(testId);

        expect(TestComponent.get(testId)).toBe(undefined);
      });
    });

    describe("deleteByEntityId method", () => {
      it("should delete all components with the provided entityId", () => {
        const testEntityId1 = createUuid();

        const testEntityId2 = createUuid();

        const testComponentId1 = createUuid();

        const testComponentId2 = createUuid();

        const testComponentId3 = createUuid();

        expect(TestComponent.getByEntityId(testEntityId1)).toEqual([]);

        expect(TestComponent.getByEntityId(testEntityId2)).toEqual([]);

        const testComponent1 = new TestComponent(
          createUuid(),
          testEntityId1,
          createUuid(),
          testComponentId1,
        );

        const testComponent2 = new TestComponent(
          createUuid(),
          testEntityId1,
          createUuid(),
          testComponentId2,
        );

        const testComponent3 = new TestComponent(
          createUuid(),
          testEntityId2,
          createUuid(),
          testComponentId3,
        );

        expect(TestComponent.getByEntityId(testEntityId2)).toEqual([
          testComponent3,
        ]);

        expect(TestComponent.getByEntityId(testEntityId1)).toEqual([
          testComponent1,
          testComponent2,
        ]);

        TestComponent.deleteByEntityId(testEntityId1);

        expect(TestComponent.getByEntityId(testEntityId1)).toEqual([]);

        expect(TestComponent.getByEntityId(testEntityId2)).toEqual([
          testComponent3,
        ]);
      });
    });

    describe("deleteByType method", () => {
      it("should delete all components with the provided type", () => {
        const testType1 = createUuid();

        const testType2 = createUuid();

        const testComponentId1 = createUuid();

        const testComponentId2 = createUuid();

        const testComponentId3 = createUuid();

        expect(TestComponent.getByType(testType1)).toEqual([]);

        expect(TestComponent.getByType(testType2)).toEqual([]);

        const testComponent1 = new TestComponent(
          testType1,
          createUuid(),
          createUuid(),
          testComponentId1,
        );

        const testComponent2 = new TestComponent(
          testType1,
          createUuid(),
          createUuid(),
          testComponentId2,
        );

        const testComponent3 = new TestComponent(
          testType2,
          createUuid(),
          createUuid(),
          testComponentId3,
        );

        expect(TestComponent.getByType(testType2)).toEqual([testComponent3]);

        expect(TestComponent.getByType(testType1)).toEqual([
          testComponent1,
          testComponent2,
        ]);

        TestComponent.deleteByType(testType1);

        expect(TestComponent.getByType(testType1)).toEqual([]);

        expect(TestComponent.getByType(testType2)).toEqual([testComponent3]);
      });
    });

    describe("deleteByEntityIdAndType method", () => {
      it("should delete the component with the provided entityId and type", () => {
        const testType1 = createUuid();

        const testType2 = createUuid();

        const testEntityId1 = createUuid();

        const testEntityId2 = createUuid();

        const testComponent1 = new TestComponent(
          testType1,
          testEntityId1,
          createUuid(),
        );

        const testComponent2 = new TestComponent(
          testType1,
          testEntityId2,
          createUuid(),
        );

        const testComponent3 = new TestComponent(
          testType2,
          testEntityId1,
          createUuid(),
        );

        const testComponent4 = new TestComponent(
          testType2,
          testEntityId2,
          createUuid(),
        );

        expect(
          TestComponent.getByEntityIdByType(testEntityId1, testType1),
        ).toBe(testComponent1);

        expect(
          TestComponent.getByEntityIdByType(testEntityId2, testType1),
        ).toBe(testComponent2);

        expect(
          TestComponent.getByEntityIdByType(testEntityId1, testType2),
        ).toBe(testComponent3);

        expect(
          TestComponent.getByEntityIdByType(testEntityId2, testType2),
        ).toBe(testComponent4);

        TestComponent.deleteByEntityIdAndType(testEntityId1, testType1);

        expect(
          TestComponent.getByEntityIdByType(testEntityId1, testType1),
        ).toBe(undefined);

        expect(
          TestComponent.getByEntityIdByType(testEntityId2, testType1),
        ).toBe(testComponent2);

        expect(
          TestComponent.getByEntityIdByType(testEntityId1, testType2),
        ).toBe(testComponent3);

        expect(
          TestComponent.getByEntityIdByType(testEntityId2, testType2),
        ).toBe(testComponent4);
      });
    });
  });
});
