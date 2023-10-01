import { Controller } from "./controller";
import { Topic } from "./topic";

describe("The Controller class", () => {
  describe("isConnected getter", () => {
    it("should return true when the controller is connected", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);
    });

    it("should return false when the controller is not connected", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      Topic.emit("GamepadDisconnected", 0);

      expect(controller.isConnected).toBe(false);
    });

    it("should not change when another controller is connected or disconnected", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      Topic.emit("GamepadConnected", 1);

      expect(controller.isConnected).toBe(false);
    });
  });

  describe("onConnected method", () => {
    it("should call the subscribed callbacks when isConnected changes from false to true", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      const callback = jest.fn();

      controller.onConnected(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadConnected", 0);

      expect(callback).toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when isConnected changes from true to false", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      const callback = jest.fn();

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      controller.onConnected(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadDisconnected", 0);

      expect(controller.isConnected).toBe(false);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when isConnected does not change", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      const callback = jest.fn();

      controller.onConnected(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      expect(callback).toHaveBeenCalled();

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("onDisconnected method", () => {
    it("should call the subscribed callbacks when isConnected changes from true to false", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      const callback = jest.fn();

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      controller.onDisconnected(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadDisconnected", 0);

      expect(controller.isConnected).toBe(false);

      expect(callback).toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when isConnected changes from false to true", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      const callback = jest.fn();

      controller.onDisconnected(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when isConnected does not change", () => {
      const controller = new Controller(0);

      expect(controller.isConnected).toBe(false);

      const callback = jest.fn();

      controller.onDisconnected(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadConnected", 0);

      expect(controller.isConnected).toBe(true);

      expect(callback).not.toHaveBeenCalled();
    });
  });
});
