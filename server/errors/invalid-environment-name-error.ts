/**
 * An error that is thrown when an invalid environment name is provided.
 */
export class InvalidEnvironmentNameError extends Error {
  constructor({ environmentName }: { environmentName: unknown }) {
    super(`Invalid environment name: ${environmentName}`);

    this.name = "InvalidEnvironmentNameError";
  }
}
