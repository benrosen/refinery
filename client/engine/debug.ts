import { JsonValue } from "../../shared";
import { Topic } from "./topic";

export class Debug {
  public static readonly onLog = (callback: (value?: JsonValue) => void) => {
    return Topic.on(`log`, callback);
  };

  public static readonly onReport = (callback: (report: JsonValue) => void) => {
    return Topic.on(`report`, callback);
  };

  public static readonly log = (value: JsonValue) => {
    Topic.emit(`log`, value);
  };

  public static readonly report = (error: Error) => {
    Topic.emit("report", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
  };
}
