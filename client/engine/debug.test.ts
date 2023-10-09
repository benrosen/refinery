import { v4 as createUuid } from "uuid";
import { Debug } from "./debug";
import { Topic } from "./topic";

describe("The Debug class", () => {
  describe("static", () => {
    describe("log method", () => {
      it("should emit a log event with the provided value", () => {
        const mockCallback = jest.fn();

        Topic.on("log", mockCallback);

        expect(mockCallback).not.toHaveBeenCalled();

        const testValue = createUuid();

        Debug.log(testValue);

        expect(mockCallback).toHaveBeenCalledTimes(1);

        expect(mockCallback).toHaveBeenCalledWith(testValue);
      });
    });

    describe("report method", () => {
      it("should emit a report event with the provided error", () => {
        const mockCallback = jest.fn();

        Topic.on("report", mockCallback);

        expect(mockCallback).not.toHaveBeenCalled();

        const testError = new Error(createUuid());

        Debug.report(testError);

        expect(mockCallback).toHaveBeenCalledTimes(1);

        expect(mockCallback).toHaveBeenCalledWith({
          name: testError.name,
          message: testError.message,
          stack: testError.stack,
        });
      });
    });

    describe("onLog method", () => {
      it("should call the provided callback when a log event is emitted", () => {
        const mockCallback = jest.fn();

        Debug.onLog(mockCallback);

        expect(mockCallback).not.toHaveBeenCalled();

        const testValue = createUuid();

        Debug.log(testValue);

        expect(mockCallback).toHaveBeenCalledTimes(1);

        expect(mockCallback).toHaveBeenCalledWith(testValue);
      });

      it("should not call callbacks that have been unsubscribed", () => {
        const mockCallback = jest.fn();

        const unsubscribe = Debug.onLog(mockCallback);

        expect(mockCallback).not.toHaveBeenCalled();

        const testValue = createUuid();

        Debug.log(testValue);

        expect(mockCallback).toHaveBeenCalledTimes(1);

        expect(mockCallback).toHaveBeenCalledWith(testValue);

        unsubscribe();

        Debug.log(testValue);

        expect(mockCallback).toHaveBeenCalledTimes(1);
      });
    });

    describe("onReport method", () => {
      it("should call the provided callback when a report event is emitted", () => {
        const mockCallback = jest.fn();

        Debug.onReport(mockCallback);

        expect(mockCallback).not.toHaveBeenCalled();

        const testError = new Error(createUuid());

        Debug.report(testError);

        expect(mockCallback).toHaveBeenCalledTimes(1);

        expect(mockCallback).toHaveBeenCalledWith({
          name: testError.name,
          message: testError.message,
          stack: testError.stack,
        });
      });

      it("should not call callbacks that have been unsubscribed", () => {
        const mockCallback = jest.fn();

        const unsubscribe = Debug.onReport(mockCallback);

        expect(mockCallback).not.toHaveBeenCalled();

        const testError = new Error(createUuid());

        Debug.report(testError);

        expect(mockCallback).toHaveBeenCalledTimes(1);

        expect(mockCallback).toHaveBeenCalledWith({
          name: testError.name,
          message: testError.message,
          stack: testError.stack,
        });

        unsubscribe();

        Debug.report(testError);

        expect(mockCallback).toHaveBeenCalledTimes(1);
      });
    });
  });
});
