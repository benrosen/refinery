import {config} from "../../package.json";
import {EnvironmentName} from "../../types";

/**
 * Check if the specified value is an {@link EnvironmentName}.
 * @param value - The value to check.
 * @returns Whether the specified value is an {@link EnvironmentName}.
 */
export const isEnvironmentName = (value: unknown): value is EnvironmentName => {
  return config.hasOwnProperty(value as string);
};
