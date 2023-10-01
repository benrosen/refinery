import { Button } from "./button";
import { Joystick } from "./joystick";
import { State } from "./state";
import { Topic } from "./topic";

export class Controller {
  public readonly triangleButton = new Button(this.gamepadIndex, 3);

  public readonly circleButton = new Button(this.gamepadIndex, 1);

  public readonly crossButton = new Button(this.gamepadIndex, 0);

  public readonly squareButton = new Button(this.gamepadIndex, 2);

  public readonly leftJoystick = new Joystick(this.gamepadIndex, 10, 0, 1);

  public readonly rightJoystick = new Joystick(this.gamepadIndex, 9, 2, 3);

  private readonly _isConnected = new State<boolean>(
    this.isConnectedKeyName,
    false,
  );

  constructor(private readonly gamepadIndex: number) {
    Topic.on<number>("GamepadConnected", (gamepadIndex) => {
      if (gamepadIndex === this.gamepadIndex) {
        this._isConnected.set(true);
      }
    });

    Topic.on<number>("GamepadDisconnected", (gamepadIndex) => {
      if (gamepadIndex === this.gamepadIndex) {
        this._isConnected.set(false);
      }
    });
  }

  public get isConnected(): boolean {
    return this._isConnected.get();
  }

  private get isConnectedKeyName(): string {
    return Controller.getIsConnectedKeyName(this.gamepadIndex);
  }

  private static getIsConnectedKeyName = (gamepadIndex: number): string => {
    return `gamepad/${gamepadIndex}/isConnected`;
  };

  public readonly onConnected = (
    callback: (gamepadIndex: number) => void,
  ): (() => void) => {
    return this._isConnected.onChanged(({ previousValue, nextValue }) => {
      if (!previousValue && nextValue) {
        callback(this.gamepadIndex);
      }
    });
  };

  public readonly onDisconnected = (
    callback: (gamepadIndex: number) => void,
  ): (() => void) => {
    return this._isConnected.onChanged(({ previousValue, nextValue }) => {
      if (previousValue && !nextValue) {
        callback(this.gamepadIndex);
      }
    });
  };
}
