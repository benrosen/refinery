import { Axis } from "./axis";
import { Button } from "./button";

export class Joystick {
  public readonly button = new Button(this.gamepadIndex, this.buttonIndex);

  public readonly horizontalAxis = new Axis(
    this.gamepadIndex,
    this.horizontalAxisIndex,
  );

  public readonly verticalAxis = new Axis(
    this.gamepadIndex,
    this.verticalAxisIndex,
  );

  constructor(
    private readonly gamepadIndex: number,
    private readonly buttonIndex: number,
    private readonly horizontalAxisIndex: number,
    private readonly verticalAxisIndex: number,
  ) {}
}
