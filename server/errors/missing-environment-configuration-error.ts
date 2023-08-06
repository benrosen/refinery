import {EnvironmentName} from "../types";

/**
 * An error that is thrown when the configuration for an environment does not exist.
 */
export class MissingEnvironmentConfigurationError extends Error {
  public constructor({
    environmentName,
  }: {
    environmentName: EnvironmentName;
  }) {
    super(
      `The configuration for the environment "${environmentName}" does not exist.`,
    );

    this.name = "MissingEnvironmentConfigurationError";
  }
}
