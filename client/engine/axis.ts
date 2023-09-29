import { State } from "./state";
import { Topic } from "./topic";

export class Axis {
  private readonly _value = new State<number>(this.valueKeyName, 0);

  constructor(
    private readonly gamepadIndex: number,
    private readonly axisIndex: number,
  ) {
    Topic.on<{
      gamepadIndex: number;
      axisIndex: number;
      value: number;
    }>("GamepadAxisChanged", (event) => {
      if (
        event.gamepadIndex === this.gamepadIndex &&
        event.axisIndex === this.axisIndex
      ) {
        this._value.set(event.value);
      }
    });
  }

  public get value(): number {
    return this._value.get();
  }

  private get valueKeyName(): string {
    return Axis.getValueKeyName(this.gamepadIndex, this.axisIndex);
  }

  private static getValueKeyName(
    gamepadIndex: number,
    axisIndex: number,
  ): string {
    return `gamepad/${gamepadIndex}/axis/${axisIndex}/value`;
  }

  public onChanged(
    callback: (value: { previousValue: number; nextValue: number }) => void,
  ): () => void {
    return this._value.onChanged(callback);
  }

  public onPositive(callback: () => void): () => void {
    return this._value.onChanged(({ previousValue, nextValue }) => {
      if (previousValue < 0 && nextValue >= 0) {
        callback();
      }
    });
  }

  public onNegative(callback: () => void): () => void {
    return this._value.onChanged(({ previousValue, nextValue }) => {
      if (previousValue > 0 && nextValue <= 0) {
        callback();
      }
    });
  }

  public onMaximum(callback: () => void): () => void {
    return this._value.onChanged(({ previousValue, nextValue }) => {
      if (previousValue !== 1 && nextValue === 1) {
        callback();
      }
    });
  }

  public onMinimum(callback: () => void): () => void {
    return this._value.onChanged(({ previousValue, nextValue }) => {
      if (previousValue !== -1 && nextValue === -1) {
        callback();
      }
    });
  }
}
