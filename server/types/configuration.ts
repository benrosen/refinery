import {EnvironmentName} from "./environment-name";

/**
 * The configuration for an environment.
 */
export type Configuration = {
  readonly environmentName: EnvironmentName;
  readonly port: number;
  readonly path: string;
};
