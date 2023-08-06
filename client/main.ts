import { createEngine } from "./index";

const useEngine = createEngine();

useEngine(async ({ scene, camera, renderer, physics, frame }) => {
  console.log(frame.index);
});
