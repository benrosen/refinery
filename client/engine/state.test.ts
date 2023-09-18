import { v4 as createUuid } from "uuid";
import { State } from "./state";

describe("The State class", () => {
  describe("instance", () => {
    it("should set the key to the value", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      const state = new State(testKeyId);

      expect(state.get()).not.toStrictEqual(testValue);

      state.set(testValue);

      expect(state.get()).toStrictEqual(testValue);
    });

    it("should return the value that was set", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      const state = new State(testKeyId);

      const returnedValue = state.set(testValue);

      expect(returnedValue).toStrictEqual(testValue);
    });

    it("should overwrite the value for the key", () => {
      const testKeyId = createUuid();

      const firstTestValue = createUuid();

      const secondTestValue = createUuid();

      const state = new State(testKeyId);

      state.set(firstTestValue);

      expect(state.get()).toStrictEqual(firstTestValue);

      state.set(secondTestValue);

      expect(state.get()).toStrictEqual(secondTestValue);
    });

    describe("onChanged function", () => {
      it("should invoke the provided callback with the previous value and the next value when the state changes", () => {
        const testKeyId = createUuid();

        const firstTestValue = createUuid();

        const secondTestValue = createUuid();

        const state = new State(testKeyId, firstTestValue);

        const testCallback = jest.fn();

        state.onChanged(testCallback);

        expect(testCallback).not.toHaveBeenCalled();

        state.set(secondTestValue);

        expect(testCallback).toHaveBeenCalledWith({
          previousValue: firstTestValue,
          nextValue: secondTestValue,
        });
      });

      it("should not invoke the provided callback when the state does not change", () => {
        const testKeyId = createUuid();

        const testValue = createUuid();

        const state = new State(testKeyId, testValue);

        const testCallback = jest.fn();

        state.onChanged(testCallback);

        expect(testCallback).not.toHaveBeenCalled();

        state.set(testValue);

        expect(testCallback).not.toHaveBeenCalled();
      });

      it("should not invoke the callback after the returned function is called", () => {
        const testKeyId = createUuid();

        const firstTestValue = createUuid();

        const secondTestValue = createUuid();

        const state = new State(testKeyId, firstTestValue);

        const testCallback = jest.fn();

        const off = state.onChanged(testCallback);

        expect(testCallback).not.toHaveBeenCalled();

        state.set(secondTestValue);

        expect(testCallback).toHaveBeenCalledWith({
          previousValue: firstTestValue,
          nextValue: secondTestValue,
        });

        off();

        state.set(firstTestValue);

        expect(testCallback).toHaveBeenCalledTimes(1);
      });
    });

    describe("with a default value", () => {
      it("should get the default value if the key does not exist.", () => {
        const testKeyId = createUuid();

        const testDefaultValue = createUuid();

        const state = new State(testKeyId, testDefaultValue);

        expect(state.get()).toStrictEqual(testDefaultValue);
      });

      it("should get the value if the key exists.", () => {
        const testKeyId = createUuid();

        const testValue = createUuid();

        const state = new State(testKeyId, testValue);

        expect(state.get()).toStrictEqual(testValue);
      });
    });

    describe("without a default value", () => {
      it("should get undefined if the key does not exist.", () => {
        const testKeyId = createUuid();

        const state = new State(testKeyId);

        expect(state.get()).toBeUndefined();
      });

      it("should get the value if the key exists.", () => {
        const testKeyId = createUuid();

        const testValue = createUuid();

        const state = new State(testKeyId);

        state.set(testValue);

        expect(state.get()).toStrictEqual(testValue);
      });
    });
  });

  describe("static get function", () => {
    it("should get the value for the key", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      State.set(testKeyId, testValue);

      expect(State.get(testKeyId)).toStrictEqual(testValue);
    });

    describe("with a default value", () => {
      it("should get the default value if the key does not exist", () => {
        const testKeyId = createUuid();

        const testDefaultValue = createUuid();

        expect(State.get(testKeyId, testDefaultValue)).toStrictEqual(
          testDefaultValue,
        );
      });

      it("should get the value if the key exists", () => {
        const testKeyId = createUuid();

        const testValue = createUuid();

        State.set(testKeyId, testValue);

        expect(State.get(testKeyId)).toStrictEqual(testValue);
      });
    });

    describe("without a default value", () => {
      it("should get undefined if the key does not exist", () => {
        const testKeyId = createUuid();

        expect(State.get(testKeyId)).toBeUndefined();
      });

      it("should get the value if the key exists", () => {
        const testKeyId = createUuid();

        const testValue = createUuid();

        State.set(testKeyId, testValue);

        expect(State.get(testKeyId)).toStrictEqual(testValue);
      });
    });
  });

  describe("static set function", () => {
    it("should set the value for the key", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      State.set(testKeyId, testValue);

      expect(State.get(testKeyId)).toStrictEqual(testValue);
    });

    it("should overwrite the value for the key", () => {
      const testKeyId = createUuid();

      const firstTestValue = createUuid();

      const secondTestValue = createUuid();

      State.set(testKeyId, firstTestValue);

      expect(State.get(testKeyId)).toStrictEqual(firstTestValue);

      State.set(testKeyId, secondTestValue);

      expect(State.get(testKeyId)).toStrictEqual(secondTestValue);
    });

    it("should emit a state changed event", () => {
      const testKeyId = createUuid();

      const firstTestValue = createUuid();

      const secondTestValue = createUuid();

      const testCallback = jest.fn();

      State.onChanged(testKeyId, testCallback);

      expect(testCallback).not.toHaveBeenCalled();

      State.set(testKeyId, firstTestValue);

      expect(testCallback).toHaveBeenCalledWith({
        previousValue: undefined,
        nextValue: firstTestValue,
      });

      State.set(testKeyId, secondTestValue);

      expect(testCallback).toHaveBeenCalledWith({
        previousValue: firstTestValue,
        nextValue: secondTestValue,
      });
    });

    it("should return the value that was set", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      const returnedValue = State.set(testKeyId, testValue);

      expect(returnedValue).toStrictEqual(testValue);
    });
  });

  describe("static onChanged function", () => {
    it("should call the callback with the previous value and the next value when the state changes", () => {
      const testKeyId = createUuid();

      const firstTestValue = createUuid();

      const secondTestValue = createUuid();

      const testCallback = jest.fn();

      State.onChanged(testKeyId, testCallback);

      expect(testCallback).not.toHaveBeenCalled();

      State.set(testKeyId, firstTestValue);

      expect(testCallback).toHaveBeenCalledWith({
        previousValue: undefined,
        nextValue: firstTestValue,
      });

      State.set(testKeyId, secondTestValue);

      expect(testCallback).toHaveBeenCalledWith({
        previousValue: firstTestValue,
        nextValue: secondTestValue,
      });
    });

    it("should not call the callback when the state does not change", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      const testCallback = jest.fn();

      State.set(testKeyId, testValue);

      State.onChanged(testKeyId, testCallback);

      expect(testCallback).not.toHaveBeenCalled();

      State.set(testKeyId, testValue);

      expect(testCallback).not.toHaveBeenCalled();
    });

    it("should not call the callback after the returned function is called", () => {
      const testKeyId = createUuid();

      const firstTestValue = createUuid();

      const secondTestValue = createUuid();

      const testCallback = jest.fn();

      const off = State.onChanged(testKeyId, testCallback);

      expect(testCallback).not.toHaveBeenCalled();

      State.set(testKeyId, firstTestValue);

      expect(testCallback).toHaveBeenCalledWith({
        previousValue: undefined,
        nextValue: firstTestValue,
      });

      State.set(testKeyId, secondTestValue);

      expect(testCallback).toHaveBeenCalledWith({
        previousValue: firstTestValue,
        nextValue: secondTestValue,
      });

      off();

      State.set(testKeyId, firstTestValue);

      expect(testCallback).toHaveBeenCalledTimes(2);
    });
  });
});
