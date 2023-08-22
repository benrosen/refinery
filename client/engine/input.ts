import { Controller } from "./controller";
import { Topic } from "./topic";

export class Input {
  public static readonly primaryController = new Controller(0);

  public static readonly secondaryController = new Controller(1);

  private static gamepads = navigator.getGamepads();

  public static update = () => {
    const nextGamepads = navigator.getGamepads();

    Input.gamepads.forEach((gamepad) => {
      if (gamepad === null) {
        return;
      }

      const nextGamepad: Gamepad = nextGamepads[gamepad.index];

      if (!nextGamepad) {
        return;
      }

      nextGamepad.buttons.forEach((button, buttonIndex) => {
        if (button.pressed && !gamepad.buttons[buttonIndex].pressed) {
          Topic.emit("GamepadButtonPressed", {
            gamepadIndex: gamepad.index,
            buttonIndex,
          });
        } else if (!button.pressed && gamepad.buttons[buttonIndex].pressed) {
          Topic.emit("GamepadButtonReleased", {
            gamepadIndex: gamepad.index,
            buttonIndex,
          });
        }
      });

      nextGamepad.axes.forEach((axis, axisIndex) => {
        if (axis !== gamepad.axes[axisIndex]) {
          Topic.emit("GamepadAxisChanged", {
            gamepadIndex: gamepad.index,
            axisIndex,
            value: axis,
          });
        }
      });
    });

    Input.gamepads = nextGamepads;
  };

  static {
    window.addEventListener("gamepadconnected", (event) => {
      Topic.emit("GamepadConnected", event.gamepad.index);
    });

    window.addEventListener("gamepaddisconnected", (event) => {
      Topic.emit("GamepadDisconnected", event.gamepad.index);
    });
  }
}
