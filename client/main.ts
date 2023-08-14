import { createEngine } from "./index";

const { input, debug, time } = createEngine();

const { log } = debug;

input.gamepads.primary.squareButton.onChanged(async (isPressed) => {
  log(`Square button ${isPressed ? "pressed" : "released"}`);
});

time.useUpdate(async ({ frame }) => {
  log(frame);
});
