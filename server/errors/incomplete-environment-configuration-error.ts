import {Configuration, EnvironmentName} from "../types";

/**
 * An error that is thrown when the configuration for an environment does not have a required property.
 */
export class IncompleteEnvironmentConfigurationError extends Error {
  public constructor({
    environmentName,
    propertyName,
  }: {
    environmentName: EnvironmentName;
    propertyName: keyof Configuration;
  }) {
    super(
      `The configuration for the "${environmentName}" environment does not have a "${propertyName}" property.`,
    );

    this.name = "IncompleteEnvironmentConfigurationError";
  }
}
