import { v4 as createUuid } from "uuid";
import { System } from "./system";

describe("The System class", () => {
  describe("constructor", () => {
    it("should create a system with the provided property values", () => {
      const testId = createUuid();

      const testType = createUuid();

      const system = new System(
        testType,
        undefined,
        undefined,
        undefined,
        testId,
      );

      expect(system.id).toBe(testId);

      expect(system.type).toBe(testType);
    });
  });

  describe("update method", () => {
    it("should call onComponentsUpdated with the provided components if onComponentsUpdated is defined", () => {
      //
    });

    it("should call onComponentsAdded with newly added components if onComponentsAdded is defined", () => {
      //
    });

    it("should call onComponentsRemoved with newly removed components if onComponentsRemoved is defined", () => {
      //
    });

    it("should not call onComponentsAdded with components that already existed", () => {
      //
    });
  });

  describe("delete method", () => {
    it("should call the static delete method with the provided id", () => {
      const spiedSystemDelete = jest.spyOn(System, "delete");

      const testId = createUuid();

      const system = new System(
        createUuid(),
        undefined,
        undefined,
        undefined,
        testId,
      );

      expect(spiedSystemDelete).not.toHaveBeenCalled();

      system.delete();

      expect(spiedSystemDelete).toHaveBeenCalledWith(testId);
    });
  });

  describe("static", () => {
    describe("update method", () => {
      it("should call the update method on each instance", () => {
        const system1 = new System(createUuid());

        const system2 = new System(createUuid());

        const spiedSystem1Update = jest.spyOn(system1, "update");

        const spiedSystem2Update = jest.spyOn(system2, "update");

        expect(spiedSystem1Update).not.toHaveBeenCalled();

        expect(spiedSystem2Update).not.toHaveBeenCalled();

        System.update();

        expect(spiedSystem1Update).toHaveBeenCalled();

        expect(spiedSystem2Update).toHaveBeenCalled();
      });
    });

    describe("get method", () => {
      it("should return a system with the provided id", () => {
        const testType = createUuid();

        const testId = createUuid();

        const system = new System(
          testType,
          undefined,
          undefined,
          undefined,
          testId,
        );

        const result = System.get(testId);

        expect(result).toBe(system);
      });

      it("should return undefined if no system with the provided id exists", () => {
        const result = System.get(createUuid());

        expect(result).toBeUndefined();
      });
    });

    describe("getByType method", () => {
      it("should return all systems with the provided type", () => {
        const testType = createUuid();

        const system1 = new System(testType);

        const system2 = new System(testType);

        const result = System.getByType(testType);

        expect(result).toEqual([system1, system2]);
      });
    });

    describe("delete method", () => {
      it("should delete the system with the provided id", () => {
        const testId = createUuid();

        const system = new System(
          createUuid(),
          undefined,
          undefined,
          undefined,
          testId,
        );

        expect(System.get(testId)).toBe(system);

        System.delete(testId);

        expect(System.get(testId)).toBeUndefined();
      });
    });

    describe("deleteByType method", () => {
      it("should delete all systems with the provided type", () => {
        const testType = createUuid();

        const system1 = new System(testType);

        const system2 = new System(testType);

        expect(System.getByType(testType)).toEqual([system1, system2]);

        System.deleteByType(testType);

        expect(System.getByType(testType)).toEqual([]);
      });
    });

    describe("deleteAll method", () => {
      it("should delete all systems", () => {
        const system1 = new System(createUuid());

        const system2 = new System(createUuid());

        expect(System.get(system1.id)).toBe(system1);

        expect(System.get(system2.id)).toBe(system2);

        System.deleteAll();

        expect(System.get(system1.id)).toBeUndefined();

        expect(System.get(system2.id)).toBeUndefined();
      });
    });
  });
});
