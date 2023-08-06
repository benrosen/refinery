import {config} from "../package.json";

/**
 * The name of an environment.
 */
export type EnvironmentName = keyof typeof config;
