import { createEngine } from "./index";

const { log, useGamepadButtonUp, useGamepadButtonDown } = createEngine();

useGamepadButtonDown(async (event) => {
  log({
    message: "Gamepad button down",
    data: event,
  });
});

useGamepadButtonUp(async (event) => {
  log({
    message: "Gamepad button up",
    data: event,
  });
});

// integrate tonejs with createAudioClient
// what if timing was entirely driven by the audio clock?
// use it to create hooks like useAudio, useQuarterNote, useHalfNote, useSynthesizer, useSample, useDistortion, useReverb,
