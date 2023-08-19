import { State } from "./state";
import { Topic } from "./topic";

export class Button {
  private readonly _isPressed = new State<boolean>(
    this.isPressedKeyName,
    false,
  );

  constructor(
    private readonly gamepadIndex: number,
    private readonly buttonIndex: number,
  ) {
    Topic.on<{
      gamepadIndex: number;
      buttonIndex: number;
    }>("GamepadButtonPressed", (event) => {
      if (
        event.gamepadIndex === this.gamepadIndex &&
        event.buttonIndex === this.buttonIndex
      ) {
        this._isPressed.set(true);
      }
    });

    Topic.on<{
      gamepadIndex: number;
      buttonIndex: number;
    }>("GamepadButtonReleased", (event) => {
      if (
        event.gamepadIndex === this.gamepadIndex &&
        event.buttonIndex === this.buttonIndex
      ) {
        this._isPressed.set(false);
      }
    });
  }

  public get isPressed(): boolean {
    return this._isPressed.get();
  }

  private get isPressedKeyName(): string {
    return Button.getIsPressedKeyName(this.gamepadIndex, this.buttonIndex);
  }

  private static getIsPressedKeyName = (
    gamepadIndex: number,
    buttonIndex: number,
  ): string => {
    return `gamepad/${gamepadIndex}/button/${buttonIndex}/isPressed`;
  };

  public onPressed = (callback: () => void): (() => void) => {
    return this._isPressed.onChanged((isPressed) => {
      if (isPressed) {
        callback();
      }
    });
  };

  public onReleased = (callback: () => void): (() => void) => {
    return this._isPressed.onChanged((isPressed) => {
      if (!isPressed) {
        callback();
      }
    });
  };
}
