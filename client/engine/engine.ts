import * as CANNON from "cannon-es";
import * as THREE from "three";
import { Controller } from "./controller";
import { Input } from "./input";
import { State } from "./state";
import { Topic } from "./topic";
import { Update } from "./update";

export class Engine {
  public static readonly topic = Topic;

  public static readonly state = State;

  public static readonly physics = new CANNON.World();

  public static readonly scene = new THREE.Scene();

  public static readonly camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  public static readonly renderer = new THREE.WebGLRenderer();

  public static readonly controller = new Controller(0);

  public static get isPaused(): boolean {
    return Update.isPaused;
  }

  public static pause = (): void => {
    Update.pause();
  };

  public static resume = (): void => {
    Update.resume();
  };

  public static readonly onPaused = (callback: () => void): (() => void) => {
    return Update.onPaused(callback);
  };

  public static readonly onResumed = (callback: () => void): (() => void) => {
    return Update.onResumed(callback);
  };

  public static readonly onUpdate = (
    callback: () => Promise<void>,
  ): (() => void) => {
    return Update.on(callback);
  };

  static {
    Update.before(async ({ delta }) => {
      Input.poll();

      Engine.physics.fixedStep(1 / 60, delta);
    });

    Update.after(async () => {
      Engine.renderer.render(Engine.scene, Engine.camera);
    });
  }
}
