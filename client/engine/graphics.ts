import * as THREE from "three";
import { State } from "./state";

export class Graphics {
  private static readonly scene = new THREE.Scene();

  private static readonly _backgroundColor = new State<string>(
    "background-color",
    "#f0f",
  );

  private static readonly camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  private static readonly renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: window.document.getElementById("game") as HTMLCanvasElement,
  });

  public static set backgroundColor(value: string) {
    Graphics._backgroundColor.set(value);
  }

  public static readonly update = () => {
    Graphics.renderer.render(this.scene, this.camera);
  };

  public static readonly getEntityById = (
    id: string,
  ): THREE.Object3D | undefined => {
    throw new Error("Not implemented");
  };

  static {
    Graphics._backgroundColor.onChanged((value) => {
      Graphics.scene.background = new THREE.Color(value.nextValue);
    });
  }
}
