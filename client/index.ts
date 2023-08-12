import * as CANNON from "cannon-es";
import * as THREE from "three";
import { JsonValue } from "../shared";

type JsonValueOrUndefined = JsonValue | undefined;

const STORAGE: { [key: string]: JsonValueOrUndefined } = {};

const EVENTS: EventTarget = window;

const CANVAS = document.getElementById("game") as HTMLCanvasElement;

const get = async <T extends JsonValueOrUndefined>({
  key,
  initialValue,
}: {
  key: string;
  initialValue?: T;
}): Promise<T> => {
  return key in STORAGE ? (STORAGE[key] as T) : initialValue!;
};

const set = async <T extends JsonValueOrUndefined>({
  key,
  value,
}: {
  key: string;
  value: T;
}): Promise<T> => {
  STORAGE[key] = value;

  return value;
};

const emit = async <T extends JsonValueOrUndefined>({
  topic,
  value,
}: {
  topic: string;
  value: T;
}): Promise<void> => {
  const customEvent = new CustomEvent(topic, { detail: value });

  EVENTS.dispatchEvent(customEvent);
};

const on = <T extends JsonValueOrUndefined>({
  topic,
  callback,
}: {
  topic: string;
  callback: (value: T) => Promise<void>;
}): (() => void) => {
  const listener = async (event: Event) => {
    const customEvent = event as CustomEvent<T>;
    await callback(customEvent.detail);
  };

  EVENTS.addEventListener(topic, listener as EventListener);

  // Return a function to remove the listener
  return () => {
    EVENTS.removeEventListener(topic, listener as EventListener);
  };
};

const useGet = <T extends JsonValueOrUndefined>({
  key,
  initialValue,
}: {
  key: string;
  initialValue?: T;
}): (() => Promise<T>) => {
  return async () => {
    return await get<T>({ key, initialValue });
  };
};

const useSet = <T extends JsonValueOrUndefined>({
  key,
}: {
  key: string;
}): ((value: T) => Promise<T>) => {
  return async (value) => {
    return await set<T>({ key, value });
  };
};

const useEmit = <T extends JsonValueOrUndefined>({
  topic,
}: {
  topic: string;
}): ((value: T) => Promise<void>) => {
  return async (value) => {
    await emit<T>({ topic, value });
  };
};

const useOn = <T extends JsonValueOrUndefined>({
  topic,
}: {
  topic: string;
}): ((callback: (value: T) => Promise<void>) => () => void) => {
  return (callback) => {
    return on<T>({ topic, callback });
  };
};

const useKey = <T extends JsonValueOrUndefined>({
  key,
  initialValue,
}: {
  key: string;
  initialValue?: T;
}): {
  get: () => Promise<T>;
  set: (value: T) => Promise<T>;
} => {
  return {
    get: useGet<T>({ key, initialValue }),
    set: useSet<T>({ key }),
  };
};

const useTopic = <T extends JsonValueOrUndefined>({
  topic,
}: {
  topic: string;
}): {
  emit: (value: T) => Promise<void>;
  on: (callback: (value: T) => Promise<void>) => () => void;
} => {
  return {
    emit: useEmit<T>({ topic }),
    on: useOn<T>({ topic }),
  };
};

const useState = <T extends JsonValueOrUndefined>({
  key,
  initialValue,
}: {
  key: string;
  initialValue?: T;
}): {
  get: () => Promise<T>;
  set: (value: T) => Promise<void>;
  onChanged: (callback: (value: T) => Promise<void>) => () => void;
} => {
  const { get, set } = useKey<T>({ key, initialValue });

  const { emit: emitOnChangedEvent, on: onChanged } = useTopic<T>({
    topic: key,
  });

  return {
    get,
    set: async (value: T) => {
      await set(value);
      await emitOnChangedEvent(value);
    },
    onChanged,
  };
};

const useToggle = ({
  key,
  initialValue,
}: {
  key: string;
  initialValue?: boolean;
}): {
  get: () => Promise<boolean>;
  set: (value: boolean) => Promise<void>;
  onChanged: (callback: (value: boolean) => Promise<void>) => () => void;
  toggle: () => Promise<boolean>;
} => {
  const { get, set, onChanged } = useState<boolean>({
    key,
    initialValue,
  });

  return {
    get,
    set,
    onChanged,
    toggle: async () => {
      const value = await get();
      await set(!value);
      return !value;
    },
  };
};

const useCounter = ({
  key,
  initialValue,
}: {
  key: string;
  initialValue?: number;
}): {
  get: () => Promise<number>;
  set: (value: number) => Promise<void>;
  onChanged: (callback: (value: number) => Promise<void>) => () => void;
  increment: () => Promise<number>;
  decrement: () => Promise<number>;
} => {
  const { get, set, onChanged } = useState<number>({
    key,
    initialValue,
  });

  return {
    get,
    set,
    onChanged,
    increment: async () => {
      const value = await get();
      await set(value + 1);
      return value + 1;
    },
    decrement: async () => {
      const value = await get();
      await set(value - 1);
      return value - 1;
    },
  };
};

type Frame = {
  index: number;
  timestamp: number;
  millisecondsSinceLastFrame: number;
};

const useFrames = ({
  onBeforeUpdate,
  onAfterUpdate,
}: {
  onBeforeUpdate?: (frame: Frame) => Promise<void>;
  onAfterUpdate?: (frame: Frame) => Promise<void>;
}): ((handler: (frame: Frame) => Promise<void>) => () => void) => {
  const { get: getFrameCount, set: setFrameCount } = useCounter({
    key: "frameCount",
    initialValue: 0,
  });

  const { get: getTimestamp, set: setTimestamp } = useKey<number>({
    key: "timestamp",
  });

  const updateHandlers: ((frame: Frame) => Promise<void>)[] = [];

  const update = async () => {
    const [currentFrameCount, currentTimestamp] = await Promise.all([
      getFrameCount(),
      getTimestamp(),
    ]);

    const nextTimestamp = Date.now();

    const nextFrameIndex = currentFrameCount + 1;

    const nextFrame: Frame = {
      index: nextFrameIndex,
      timestamp: nextTimestamp,
      millisecondsSinceLastFrame: nextTimestamp - currentTimestamp,
    };

    await Promise.all([
      setFrameCount(nextFrame.index),
      setTimestamp(nextFrame.timestamp),
    ]);

    if (onBeforeUpdate) {
      await onBeforeUpdate(nextFrame);
    }

    await Promise.all(updateHandlers.map((handler) => handler(nextFrame)));

    if (onAfterUpdate) {
      await onAfterUpdate(nextFrame);
    }

    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);

  return (handler) => {
    updateHandlers.push(handler);

    return () => {
      updateHandlers.splice(updateHandlers.indexOf(handler), 1);
    };
  };
};

const createScene = () => {
  const scene = new THREE.Scene();

  scene.background = new THREE.Color(0x000000);

  return scene;
};

const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    75,
    CANVAS.clientWidth / CANVAS.clientHeight,
    0.1,
    1000,
  );

  on({
    topic: "resize",
    callback: async () => {
      // TODO resize camera, etc.
      console.log("hi - camera");
    },
  });

  return camera;
};

const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({
    canvas: CANVAS,
    antialias: true,
  });

  renderer.pixelRatio = window.devicePixelRatio;

  // BUG when this is enabled, the canvas is not resized
  // renderer.setSize(window.innerWidth, window.innerHeight);

  return renderer;
};

const createPhysics = () => {
  return new CANNON.World();
};

const createGamepadAPIPollerPublisher = () => {
  let gamepads: Gamepad[] = [];

  const emitGamepadConnectedEvent = useEmit<Gamepad["id"]>({
    topic: "GamepadConnected",
  });

  const emitGamepadDisconnectedEvent = useEmit<Gamepad["id"]>({
    topic: "GamepadDisconnected",
  });

  window.addEventListener("gamepadconnected", async (event: GamepadEvent) => {
    console.log("gamepad connected", event);

    await emitGamepadConnectedEvent(event.gamepad.id);
  });

  window.addEventListener(
    "gamepaddisconnected",
    async (event: GamepadEvent) => {
      console.log("gamepad disconnected", event);

      await emitGamepadDisconnectedEvent(event.gamepad.id);
    },
  );

  const emitGamepadButtonDownEvent = useEmit<{
    gamepadId: Gamepad["id"];
    buttonIndex: number;
  }>({
    topic: "GamepadButtonDown",
  });

  const emitGamepadButtonUpEvent = useEmit<{
    gamepadId: Gamepad["id"];
    buttonIndex: number;
  }>({
    topic: "GamepadButtonUp",
  });

  const emitGamepadAxisValueChangedEvent = useEmit<{
    gamepadId: Gamepad["id"];
    axisIndex: number;
    value: number;
  }>({
    topic: "GamepadAxisValueChanged",
  });

  const pollGamepadsAndPublishEvents = () => {
    const nextGamepads = navigator.getGamepads();

    gamepads.forEach(async (gamepad, index) => {
      if (gamepad === null) {
        return;
      }

      const nextGamepad = nextGamepads[index];

      if (!nextGamepad) {
        return;
      }

      nextGamepad.buttons.forEach((button, buttonIndex) => {
        if (button.pressed && !gamepad.buttons[buttonIndex].pressed) {
          emitGamepadButtonDownEvent({
            gamepadId: gamepad.id,
            buttonIndex,
          });
        } else if (!button.pressed && gamepad.buttons[buttonIndex].pressed) {
          emitGamepadButtonUpEvent({
            gamepadId: gamepad.id,
            buttonIndex,
          });
        }
      });

      nextGamepad.axes.forEach((axis, axisIndex) => {
        if (axis !== gamepad.axes[axisIndex]) {
          emitGamepadAxisValueChangedEvent({
            gamepadId: gamepad.id,
            axisIndex,
            value: axis,
          });
        }
      });
    });

    gamepads = nextGamepads;
  };

  return {
    pollGamepadsAndPublishEvents,
  };
};

export const createEngine = () => {
  const physics = createPhysics();

  const renderer = createRenderer();

  const camera = createCamera();

  const scene = createScene();

  const { pollGamepadsAndPublishEvents } = createGamepadAPIPollerPublisher();

  const useFrame = useFrames({
    onBeforeUpdate: async (frame) => {
      pollGamepadsAndPublishEvents();

      physics.fixedStep(1 / 60, frame.millisecondsSinceLastFrame / 1000);
    },
    onAfterUpdate: async (frame) => {
      camera.aspect = CANVAS.clientWidth / CANVAS.clientHeight;

      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    },
  });

  const useUpdate = (
    callback: ({
      scene,
      camera,
      renderer,
      physics,
      frame,
    }: {
      scene: THREE.Scene;
      camera: THREE.Camera;
      renderer: THREE.Renderer;
      physics: CANNON.World;
      frame: Frame;
    }) => Promise<void>,
  ) => {
    return useFrame(async (frame) => {
      await callback({
        scene,
        camera,
        renderer,
        physics,
        frame,
      });
    });
  };

  const useCamera = (callback: (camera: THREE.Camera) => void) => {
    return callback(camera);
  };

  const useRenderer = (callback: (renderer: THREE.Renderer) => void) => {
    return callback(renderer);
  };

  const usePhysics = (callback: (physics: CANNON.World) => void) => {
    return callback(physics);
  };

  const useScene = (callback: (scene: THREE.Scene) => void) => {
    return callback(scene);
  };

  const useGamepadConnected = useOn<{ gamepadId: Gamepad["id"] }>({
    topic: "GamepadConnected",
  });

  const useGamepadDisconnected = useOn<{ gamepadId: Gamepad["id"] }>({
    topic: "GamepadDisconnected",
  });

  const useGamepadButtonDown = useOn<{
    gamepadId: Gamepad["id"];
    buttonIndex: number;
  }>({
    topic: "GamepadButtonDown",
  });

  const useGamepadButtonUp = useOn<{
    gamepadId: Gamepad["id"];
    buttonIndex: number;
  }>({
    topic: "GamepadButtonUp",
  });

  const useGamepadAxisValueChanged = useOn<{
    gamepadId: Gamepad["id"];
    axisIndex: number;
    value: number;
  }>({
    topic: "GamepadAxisValueChanged",
  });

  return {
    useGamepadConnected,
    useGamepadDisconnected,
    useGamepadButtonDown,
    useGamepadButtonUp,
    useGamepadAxisValueChanged,
    useCamera,
    usePhysics,
    useRenderer,
    useScene,
    useUpdate,
  };
};
