import {InvalidEnvironmentNameError} from "../../errors";
import {EnvironmentName} from "../../types";
import {isEnvironmentName} from "../is-environment-name";

/**
 * Get the name of the current environment.
 * @returns The name of the current environment.
 * @throws {InvalidEnvironmentNameError} The environment name is invalid.
 */
export const getEnvironmentName = (): EnvironmentName => {
  const environmentName = process.env.NODE_ENV;

  if (!isEnvironmentName(environmentName)) {
    throw new InvalidEnvironmentNameError({
      environmentName,
    });
  }

  return environmentName;
};
