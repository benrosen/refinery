import { Axis } from "./axis";
import { Topic } from "./topic";

describe("The Axis class", () => {
  describe("value getter", () => {
    it("should return the most recent value", () => {
      const axis = new Axis(0, 0);

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);
    });
  });

  describe("onChanged method", () => {
    it("should call the subscribed callbacks when the value changes", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      axis.onChanged(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(callback).toHaveBeenCalledWith({
        previousValue: 0,
        nextValue: 0.5,
      });
    });

    it("should not call the subscribed callbacks when the value does not change", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0,
      });

      axis.onChanged(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0,
      });

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call callbacks that have been unsubscribed", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      const off = axis.onChanged(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(callback).toHaveBeenCalledWith({
        previousValue: 0,
        nextValue: 0.5,
      });

      off();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0,
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("onPositive method", () => {
    it("should call the subscribed callbacks when the value changes from negative to positive", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      axis.onPositive(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      expect(callback).toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from positive to negative", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      axis.onPositive(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from zero to positive", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      axis.onPositive(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from one positive number to another positive number", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      axis.onPositive(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.75,
      });

      expect(axis.value).toBe(0.75);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value does not change", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      axis.onPositive(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0,
      });

      expect(axis.value).toBe(0);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call callbacks that have been unsubscribed", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      const off = axis.onPositive(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      expect(callback).toHaveBeenCalled();

      off();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("onNegative method", () => {
    it("should call the subscribed callbacks when the value changes from positive to negative", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      axis.onNegative(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      expect(callback).toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from negative to positive", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      axis.onNegative(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from zero to negative", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      axis.onNegative(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from one negative number to another negative number", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      axis.onNegative(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.75,
      });

      expect(axis.value).toBe(-0.75);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value does not change", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      axis.onNegative(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0,
      });

      expect(axis.value).toBe(0);

      expect(callback).not.toHaveBeenCalled();
    });

    it("should not call callbacks that have been unsubscribed", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      const off = axis.onNegative(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      expect(callback).toHaveBeenCalled();

      off();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("onMaximum method", () => {
    it("should call the subscribed callbacks when the value changes from less than one to one", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      axis.onMaximum(callback);

      expect(callback).not.toHaveBeenCalled();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      expect(callback).toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from one to less than one", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      axis.onMaximum(callback);

      expect(callback).not.toHaveBeenCalled();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      expect(callback).toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("should not call callbacks that have been unsubscribed", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      const off = axis.onMaximum(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      expect(callback).toHaveBeenCalled();

      off();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(axis.value).toBe(0.5);

      expect(callback).toHaveBeenCalledTimes(1);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 1,
      });

      expect(axis.value).toBe(1);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("onMinimum method", () => {
    it("should call the subscribed callbacks when the value changes from greater than negative one to negative one", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      axis.onMinimum(callback);

      expect(callback).not.toHaveBeenCalled();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      expect(callback).toHaveBeenCalled();
    });

    it("should not call the subscribed callbacks when the value changes from negative one to greater than negative one", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      axis.onMinimum(callback);

      expect(callback).not.toHaveBeenCalled();

      expect(axis.value).toBe(0);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      expect(callback).toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("should not call callbacks that have been unsubscribed", () => {
      const axis = new Axis(0, 0);

      const callback = jest.fn();

      expect(axis.value).toBe(0);

      const off = axis.onMinimum(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      expect(callback).toHaveBeenCalled();

      off();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -0.5,
      });

      expect(axis.value).toBe(-0.5);

      expect(callback).toHaveBeenCalledTimes(1);

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: -1,
      });

      expect(axis.value).toBe(-1);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
