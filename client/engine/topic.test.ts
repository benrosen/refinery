import { v4 as createUuid } from "uuid";
import { Topic } from "./topic";

describe("The Topic class allows you to", () => {
  describe("publish an event to multiple subscribers via", () => {
    test("an instance method.", () => {
      const testTopicName = createUuid();

      const testTopic = new Topic(testTopicName);

      const testValue = createUuid();

      const testCallbacks = [jest.fn(), jest.fn(), jest.fn()];

      const testUnsubscribes = testCallbacks.map((testCallback) => {
        return testTopic.on(testCallback);
      });

      testTopic.emit(testValue);

      testCallbacks.forEach((testCallback) => {
        expect(testCallback).toHaveBeenCalledWith(testValue);
      });

      testUnsubscribes.forEach((testUnsubscribe) => {
        testUnsubscribe();
      });

      const postUnsubscribeTestValue = createUuid();

      testTopic.emit(postUnsubscribeTestValue);

      testCallbacks.forEach((testCallback) => {
        expect(testCallback).not.toHaveBeenCalledWith(postUnsubscribeTestValue);
      });
    });

    test("a static method.", () => {
      const testTopicName = createUuid();

      const testValue = createUuid();

      const testCallbacks = [jest.fn(), jest.fn(), jest.fn()];

      const testUnsubscribes = testCallbacks.map((testCallback) => {
        return Topic.on(testTopicName, testCallback);
      });

      Topic.emit(testTopicName, testValue);

      testCallbacks.forEach((testCallback) => {
        expect(testCallback).toHaveBeenCalledWith(testValue);
      });

      testUnsubscribes.forEach((testUnsubscribe) => {
        testUnsubscribe();
      });

      const postUnsubscribeTestValue = createUuid();

      Topic.emit(testTopicName, postUnsubscribeTestValue);

      testCallbacks.forEach((testCallback) => {
        expect(testCallback).not.toHaveBeenCalledWith(postUnsubscribeTestValue);
      });
    });
  });
});
