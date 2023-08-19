import { Button } from "./button";
import { Joystick } from "./joystick";

export class Controller {
  public readonly triangle = new Button(this.gamepadIndex, 3);

  public readonly circle = new Button(this.gamepadIndex, 1);

  public readonly cross = new Button(this.gamepadIndex, 0);

  public readonly square = new Button(this.gamepadIndex, 2);

  public readonly leftStick = new Joystick(this.gamepadIndex, 14, 0, 1);

  public readonly rightStick = new Joystick(this.gamepadIndex, 15, 2, 3);

  constructor(private readonly gamepadIndex: number) {}
}
