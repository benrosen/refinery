import * as THREE from "three";
import { Engine } from "./engine";

Engine.scene.background = new THREE.Color(0x000000);

const score = new Engine.state<number>("score", 0);

score.onChanged((data) => {
  console.log(`score changed: ${data}`);
});

score.set(100);

console.log(`got score: ${score.get()}`);

Engine.controller.square.onPressed(() => {
  console.log("square pressed");
});
