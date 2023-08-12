import { createEngine } from "./index";

const engine = createEngine();

engine.useGamepadButtonDown(async (event) => {
  console.log("Gamepad button down", JSON.stringify(event, null, 2));
});

engine.useGamepadButtonUp(async (event) => {
  console.log("Gamepad button up", JSON.stringify(event, null, 2));
});
