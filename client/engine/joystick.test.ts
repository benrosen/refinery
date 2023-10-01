import { Joystick } from "./joystick";
import { Topic } from "./topic";

describe("The Joystick class", () => {
  describe("button property", () => {
    it("should call the subscribed callbacks when the button is pressed", () => {
      const joystick = new Joystick(0, 0, 0, 0);

      const callback = jest.fn();

      joystick.button.onPressed(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadButtonPressed", {
        gamepadIndex: 0,
        buttonIndex: 0,
      });

      expect(callback).toHaveBeenCalled();
    });
  });

  describe("horizontalAxis property", () => {
    it("should call the subscribed callbacks when the axis value changes", () => {
      const joystick = new Joystick(0, 0, 0, 0);

      const callback = jest.fn();

      joystick.horizontalAxis.onChanged(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(callback).toHaveBeenCalled();
    });
  });

  describe("verticalAxis property", () => {
    it("should call the subscribed callbacks when the axis value changes", () => {
      const joystick = new Joystick(0, 0, 0, 0);

      const callback = jest.fn();

      joystick.verticalAxis.onChanged(callback);

      expect(callback).not.toHaveBeenCalled();

      Topic.emit("GamepadAxisChanged", {
        gamepadIndex: 0,
        axisIndex: 0,
        value: 0.5,
      });

      expect(callback).toHaveBeenCalled();
    });
  });
});
