import { Engine } from "./engine";

const entity = Engine.createEntity();

const colorComponent = entity.createComponent("color", { value: "red" });

colorComponent.onValueChanged((value) => {
  console.log(`color changed to ${value}`);
});

colorComponent.value = { value: "blue" };
