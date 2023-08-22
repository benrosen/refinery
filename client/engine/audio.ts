import * as TONE from "tone";
import { State } from "./state";

export class Audio {
  private static readonly _isReady = new State<boolean>("is-ready", false);

  private static readonly _wasStarted = new State<boolean>(
    "was-started",
    false,
  );

  private static readonly interactionEventNames = [
    "mousedown",
    "keydown",
    "touchstart",
  ];

  public static get isReady(): boolean {
    return Audio._isReady.get();
  }

  public static readonly onReady = (callback: () => void): (() => void) => {
    return Audio._isReady.onChanged((value) => {
      if (value) {
        callback();
      }
    });
  };

  private static start = async () => {
    if (Audio._wasStarted.get()) {
      return;
    }

    Audio._wasStarted.set(true);

    await TONE.start();

    Audio._isReady.set(true);
  };

  static {
    Audio.interactionEventNames.forEach((eventName) => {
      window.addEventListener(eventName, Audio.start, { once: true });
    });
  }
}
