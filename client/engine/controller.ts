import { Button } from "./button";
import { Joystick } from "./joystick";
import { State } from "./state";

export class Controller {
  public readonly triangle = new Button(this.gamepadIndex, 3);

  public readonly circle = new Button(this.gamepadIndex, 1);

  public readonly cross = new Button(this.gamepadIndex, 0);

  public readonly square = new Button(this.gamepadIndex, 2);

  public readonly leftStick = new Joystick(this.gamepadIndex, 10, 0, 1);

  public readonly rightStick = new Joystick(this.gamepadIndex, 9, 2, 3);

  private readonly _isConnected = new State<boolean>(
    this.isConnectedKeyName,
    false,
  );

  constructor(private readonly gamepadIndex: number) {}

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
    return this._isConnected.onChanged((isConnected) => {
      if (isConnected) {
        callback(this.gamepadIndex);
      }
    });
  };

  public readonly onDisconnected = (
    callback: (gamepadIndex: number) => void,
  ): (() => void) => {
    return this._isConnected.onChanged((isConnected) => {
      if (!isConnected) {
        callback(this.gamepadIndex);
      }
    });
  };
}
