import { v4 as createUuid } from "uuid";
import { Topic } from "./topic";

describe("The Topic class", () => {
  describe("instance", () => {
    describe("emit function", () => {
      it("should emit a value to the topic", () => {
        const testTopicId = createUuid();

        const testValue = createUuid();

        const topic = new Topic(testTopicId);

        const testCallback = jest.fn();

        topic.on(testCallback);

        expect(testCallback).not.toHaveBeenCalled();

        topic.emit(testValue);

        expect(testCallback).toHaveBeenCalledWith(testValue);
      });

      it("should return the value that was emitted", () => {
        const testTopicId = createUuid();

        const testValue = createUuid();

        const topic = new Topic(testTopicId);

        const returnedValue = topic.emit(testValue);

        expect(returnedValue).toStrictEqual(testValue);
      });
    });

    describe("on function", () => {
      it("should call the callback with the value that was emitted to the topic", () => {
        const testTopicId = createUuid();

        const testValue = createUuid();

        const topic = new Topic(testTopicId);

        const testCallback = jest.fn();

        topic.on(testCallback);

        expect(testCallback).not.toHaveBeenCalled();

        topic.emit(testValue);

        expect(testCallback).toHaveBeenCalledWith(testValue);
      });

      it("should not call the callback after the returned function is called", () => {
        const testTopicId = createUuid();

        const testValue = createUuid();

        const topic = new Topic(testTopicId);

        const testCallback = jest.fn();

        const off = topic.on(testCallback);

        expect(testCallback).not.toHaveBeenCalled();

        topic.emit(testValue);

        expect(testCallback).toHaveBeenCalledWith(testValue);

        off();

        topic.emit(testValue);

        expect(testCallback).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("static emit method", () => {
    it("should emit a value to the topic", () => {
      const testTopicId = createUuid();

      const testValue = createUuid();

      const testCallback = jest.fn();

      Topic.on(testTopicId, testCallback);

      expect(testCallback).not.toHaveBeenCalled();

      Topic.emit(testTopicId, testValue);

      expect(testCallback).toHaveBeenCalledWith(testValue);
    });

    it("should return the value that was emitted", () => {
      const testTopicId = createUuid();

      const testValue = createUuid();

      const returnedValue = Topic.emit(testTopicId, testValue);

      expect(returnedValue).toStrictEqual(testValue);
    });
  });

  describe("static on method", () => {
    it("should call the callback with the value that was emitted to the topic", () => {
      const testTopicId = createUuid();

      const testValue = createUuid();

      const testCallback = jest.fn();

      Topic.on(testTopicId, testCallback);

      expect(testCallback).not.toHaveBeenCalled();

      Topic.emit(testTopicId, testValue);

      expect(testCallback).toHaveBeenCalledWith(testValue);
    });

    it("should not call the callback after the returned function is called", () => {
      const testTopicId = createUuid();

      const testValue = createUuid();

      const testCallback = jest.fn();

      const off = Topic.on(testTopicId, testCallback);

      expect(testCallback).not.toHaveBeenCalled();

      Topic.emit(testTopicId, testValue);

      expect(testCallback).toHaveBeenCalledWith(testValue);

      off();

      Topic.emit(testTopicId, testValue);

      expect(testCallback).toHaveBeenCalledTimes(1);
    });
  });
});
