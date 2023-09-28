// this mock needs to be created before we try to import getGamepads.
// that's why it's all the way up here.
const mockGetGamepads = jest.fn();

import { getGamepads } from "./get-gamepads";
import { Input } from "./input";
import { Topic } from "./topic";

jest.mock("./get-gamepads", () => {
  return {
    getGamepads: mockGetGamepads,
  };
});

const mockedGetGamepads = jest.mocked(getGamepads);

mockedGetGamepads.mockReturnValue([]);

describe("The Input class", () => {
  beforeEach(() => {
    mockedGetGamepads.mockClear();
  });

  it('should emit a "GamepadConnected" event with the gamepad index when a "gamepadconnected" event is detected on the window', () => {
    const input = new Input();

    const gamepadIndex = 0;

    const gamepadConnectedCallback = jest.fn();

    Topic.on("GamepadConnected", gamepadConnectedCallback);

    expect(gamepadConnectedCallback).not.toHaveBeenCalled();

    const mockGamepadConnectedEvent = new Event("gamepadconnected");

    Object.defineProperty(mockGamepadConnectedEvent, "gamepad", {
      value: {
        index: gamepadIndex,
      },
    });

    window.dispatchEvent(mockGamepadConnectedEvent);

    expect(gamepadConnectedCallback).toHaveBeenCalledWith(gamepadIndex);
  });

  it('should emit a "GamepadDisconnected" event with the gamepad index when a "gamepaddisconnected" event is detected on the window', () => {
    const input = new Input();

    const gamepadIndex = 0;

    const gamepadDisconnectedCallback = jest.fn();

    Topic.on("GamepadDisconnected", gamepadDisconnectedCallback);

    expect(gamepadDisconnectedCallback).not.toHaveBeenCalled();

    const mockGamepadDisconnectedEvent = new Event("gamepaddisconnected");

    Object.defineProperty(mockGamepadDisconnectedEvent, "gamepad", {
      value: {
        index: gamepadIndex,
      },
    });

    window.dispatchEvent(mockGamepadDisconnectedEvent);

    expect(gamepadDisconnectedCallback).toHaveBeenCalledWith(gamepadIndex);
  });

  it("should emit a GamepadButtonPressed event with the gamepad index and button index when a button is pressed", () => {
    const input = new Input();

    const gamepadBeforeButtonPress = {
      index: 0,
      axes: [],
      buttons: [
        {
          pressed: false,
        },
      ],
    };

    const gamepadAfterButtonPress = {
      index: 0,
      axes: [],
      buttons: [
        {
          pressed: true,
        },
      ],
    };

    const gamepadButtonPressedCallback = jest.fn();

    Topic.on("GamepadButtonPressed", gamepadButtonPressedCallback);

    mockedGetGamepads.mockReturnValueOnce([
      gamepadBeforeButtonPress as unknown as Gamepad,
    ]);

    expect(gamepadButtonPressedCallback).not.toHaveBeenCalled();

    input.update();

    expect(gamepadButtonPressedCallback).not.toHaveBeenCalled();

    mockedGetGamepads.mockReturnValueOnce([
      gamepadAfterButtonPress as unknown as Gamepad,
    ]);

    input.update();

    expect(gamepadButtonPressedCallback).toHaveBeenCalledWith({
      gamepadIndex: 0,
      buttonIndex: 0,
    });
  });

  it("should emit a GamepadButtonReleased event with the gamepad index and button index when a button is released", () => {
    const input = new Input();

    const gamepadBeforeButtonRelease = {
      index: 0,
      axes: [],
      buttons: [
        {
          pressed: true,
        },
      ],
    };

    const gamepadAfterButtonRelease = {
      index: 0,
      axes: [],
      buttons: [
        {
          pressed: false,
        },
      ],
    };

    const gamepadButtonReleasedCallback = jest.fn();

    Topic.on("GamepadButtonReleased", gamepadButtonReleasedCallback);

    mockedGetGamepads.mockReturnValueOnce([
      gamepadBeforeButtonRelease as unknown as Gamepad,
    ]);

    expect(gamepadButtonReleasedCallback).not.toHaveBeenCalled();

    input.update();

    expect(gamepadButtonReleasedCallback).not.toHaveBeenCalled();

    mockedGetGamepads.mockReturnValueOnce([
      gamepadAfterButtonRelease as unknown as Gamepad,
    ]);

    input.update();

    expect(gamepadButtonReleasedCallback).toHaveBeenCalledWith({
      gamepadIndex: 0,
      buttonIndex: 0,
    });
  });

  it("should emit a GamepadAxisChanged event with the gamepad index, axis index, and value when an axis is changed", () => {
    const input = new Input();

    const gamepadBeforeAxisChange = {
      index: 0,
      axes: [0],
      buttons: [],
    };

    const gamepadAfterAxisChange = {
      index: 0,
      axes: [1],
      buttons: [],
    };

    const gamepadAxisChangedCallback = jest.fn();

    Topic.on("GamepadAxisChanged", gamepadAxisChangedCallback);

    mockedGetGamepads.mockReturnValueOnce([
      gamepadBeforeAxisChange as unknown as Gamepad,
    ]);

    expect(gamepadAxisChangedCallback).not.toHaveBeenCalled();

    input.update();

    // NOTE fails when run with other tests, but passes when run alone
    expect(gamepadAxisChangedCallback).not.toHaveBeenCalled();

    mockedGetGamepads.mockReturnValueOnce([
      gamepadAfterAxisChange as unknown as Gamepad,
    ]);

    input.update();

    expect(gamepadAxisChangedCallback).toHaveBeenCalledWith({
      gamepadIndex: 0,
      axisIndex: 0,
      value: 1,
    });
  });
});
