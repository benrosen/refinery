import { v4 as createUuid } from "uuid";
import { Key } from "./key";

describe("The Key class", () => {
  describe("instance", () => {
    it("should set the key to the value", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      const key = new Key(testKeyId);

      expect(key.get()).not.toStrictEqual(testValue);

      key.set(testValue);

      expect(key.get()).toStrictEqual(testValue);
    });

    it("should return the value that was set", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      const key = new Key(testKeyId);

      const returnedValue = key.set(testValue);

      expect(returnedValue).toStrictEqual(testValue);
    });

    it("should overwrite the value for the key", () => {
      const testKeyId = createUuid();

      const firstTestValue = createUuid();

      const secondTestValue = createUuid();

      const key = new Key(testKeyId);

      key.set(firstTestValue);

      expect(key.get()).toStrictEqual(firstTestValue);

      key.set(secondTestValue);

      expect(key.get()).toStrictEqual(secondTestValue);
    });

    describe("with a default value", () => {
      it("should get the default value if the key does not exist.", () => {
        const testKeyId = createUuid();

        const testDefaultValue = createUuid();

        const key = new Key(testKeyId, testDefaultValue);

        expect(key.get()).toStrictEqual(testDefaultValue);
      });

      it("should get the expected value if the key exists.", () => {
        const testKeyId = createUuid();

        const testDefaultValue = createUuid();

        const testValue = createUuid();

        const key = new Key(testKeyId, testDefaultValue);

        key.set(testValue);

        expect(key.get()).toStrictEqual(testValue);
      });
    });

    describe("without a default value", () => {
      it("should get undefined if the key does not exist.", () => {
        const testKeyId = createUuid();

        const key = new Key(testKeyId);

        expect(key.get()).toBeUndefined();
      });

      it("should get the expected value if the key exists.", () => {
        const testKeyId = createUuid();

        const testValue = createUuid();

        const key = new Key(testKeyId);

        key.set(testValue);

        expect(key.get()).toStrictEqual(testValue);
      });
    });
  });

  describe("static get method", () => {
    describe("with a default value", () => {
      it("should get the default value if the key does not exist", () => {
        const testKeyId = createUuid();

        const testDefaultValue = createUuid();

        expect(Key.get(testKeyId, testDefaultValue)).toStrictEqual(
          testDefaultValue,
        );
      });

      it("should get the expected value if the key exists", () => {
        const testKeyId = createUuid();

        const testDefaultValue = createUuid();

        const testValue = createUuid();

        Key.set(testKeyId, testValue);

        expect(Key.get(testKeyId, testDefaultValue)).toStrictEqual(testValue);
      });
    });

    describe("without a default value", () => {
      it("should get undefined if the key does not exist", () => {
        const testKeyId = createUuid();

        expect(Key.get(testKeyId)).toBeUndefined();
      });

      it("should get the expected value if the key exists", () => {
        const testKeyId = createUuid();

        const testValue = createUuid();

        Key.set(testKeyId, testValue);

        expect(Key.get(testKeyId)).toStrictEqual(testValue);
      });
    });
  });

  describe("static set method", () => {
    it("should set the value for the key", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      expect(Key.get(testKeyId)).toBeUndefined();

      Key.set(testKeyId, testValue);

      expect(Key.get(testKeyId)).toStrictEqual(testValue);
    });

    it("should return the value that was set", () => {
      const testKeyId = createUuid();

      const testValue = createUuid();

      const returnedValue = Key.set(testKeyId, testValue);

      expect(returnedValue).toStrictEqual(testValue);
    });

    it("should overwrite the value for the key", () => {
      const testKeyId = createUuid();

      const firstTestValue = createUuid();

      const secondTestValue = createUuid();

      Key.set(testKeyId, firstTestValue);

      expect(Key.get(testKeyId)).toStrictEqual(firstTestValue);

      Key.set(testKeyId, secondTestValue);

      expect(Key.get(testKeyId)).toStrictEqual(secondTestValue);
    });
  });
});
