import { Button } from "./button";
import { Topic } from "./topic";

describe("The Button class", () => {
  describe("isPressed property", () => {
    it("should return true when the button is pressed", () => {
      const button = new Button(0, 0);

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(button.isPressed).toBe(true);
    });

    it("should return false when the button is not pressed", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(button.isPressed).toBe(true);

      Topic.emit("GamepadButtonReleased", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(button.isPressed).toBe(false);
    });

    it("should not change when another button on the same gamepad is pressed or released", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 1,
      });

      expect(button.isPressed).toBe(false);
    });

    it("should not change when another button on a different gamepad is pressed or released", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 1,
        buttonIndex: 1,
      });

      expect(button.isPressed).toBe(false);
    });

    it("should not change when the same button on a different gamepad is pressed or released", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 1,
        buttonIndex: 0,
      });

      expect(button.isPressed).toBe(false);
    });
  });

  describe("onPressed method", () => {
    it("should call the subscribed callbacks when isPressed changes from false to true", () => {
      const button = new Button(0, 0);

      const callback = jest.fn();

      button.onPressed(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });
    });

    it("should not call the subscribed callbacks when isPressed changes from true to false", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      const callback = jest.fn();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(button.isPressed).toBe(true);

      button.onPressed(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonReleased", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(button.isPressed).toBe(false);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when isPressed does not change", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      const callback = jest.fn();

      button.onPressed(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonReleased", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call callbacks that have been unsubscribed", () => {
      const button = new Button(0, 0);

      const callback = jest.fn();

      const unsubscribe = button.onPressed(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).toHaveBeenCalledTimes(1);

      unsubscribe();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("onReleased method", () => {
    it("should call the subscribed callbacks when isPressed changes from true to false", () => {
      const button = new Button(0, 0);

      const callback = jest.fn();

      button.onReleased(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonReleased", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when isPressed changes from false to true", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      const callback = jest.fn();

      button.onReleased(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(button.isPressed).toBe(true);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when isPressed does not change", () => {
      const button = new Button(0, 0);

      expect(button.isPressed).toBe(false);

      const callback = jest.fn();

      button.onReleased(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonReleased", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call callbacks that have been unsubscribed", () => {
      const button = new Button(0, 0);

      const callback = jest.fn();

      const unsubscribe = button.onReleased(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonReleased", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).toHaveBeenCalledTimes(1);

      unsubscribe();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).toHaveBeenCalledTimes(1);

      Topic.emit("GamepadButtonReleased", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
