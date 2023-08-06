import {IncompleteEnvironmentConfigurationError, MissingEnvironmentConfigurationError,} from "../../errors";
import {config} from "../../package.json";
import {Configuration, EnvironmentName} from "../../types";
import {getEnvironmentName} from "../get-environment-name";

/**
 * Get the configuration for the specified environment. If no environment is specified, the current environment is used.
 * @param environmentName - The name of the environment.
 * @returns The configuration for the specified environment.
 * @throws {MissingEnvironmentConfigurationError} The configuration for the specified environment does not exist.
 * @throws {IncompleteEnvironmentConfigurationError} The configuration for the specified environment does not have a required property.
 */
export const getConfiguration = (
  {
    environmentName,
  }: {
    readonly environmentName: EnvironmentName;
  } = {
    environmentName: getEnvironmentName(),
  },
): Configuration => {
  const configuration = config[environmentName];

  if (configuration === undefined) {
    throw new MissingEnvironmentConfigurationError({
      environmentName,
    });
  }

  if (typeof configuration.port !== "number") {
    throw new IncompleteEnvironmentConfigurationError({
      environmentName,
      propertyName: "port",
    });
  }

  if (typeof configuration.path !== "string") {
    throw new IncompleteEnvironmentConfigurationError({
      environmentName,
      propertyName: "path",
    });
  }

  return {
    ...configuration,
    environmentName,
  };
};
