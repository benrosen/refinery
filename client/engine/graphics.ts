import * as THREE from "three";
import { Graphical } from "./graphical";
import { GraphicalComponent } from "./graphical-component";
import { State } from "./state";
import { System } from "./system";

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

  public static readonly createEntity = (id: string): THREE.Object3D => {
    throw new Error("Not implemented");
  };

  public static readonly deleteEntity = (id: string): void => {
    throw new Error("Not implemented");
  };

  static {
    // TODO should this be a component?
    Graphics._backgroundColor.onChanged((value) => {
      Graphics.scene.background = new THREE.Color(value.nextValue);
    });

    new System<Graphical>(
      GraphicalComponent.type,
      undefined,
      (components) => {
        components.forEach((component) => {
          Graphics.createEntity(component.entityId);
        });
      },
      (components) => {
        components.forEach((component) => {
          Graphics.deleteEntity(component.entityId);
        });
      },
    );
  }
}
