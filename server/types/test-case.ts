/**
 * A test case for a pure function.
 *
 * @typeParam F The type of the pure function.
 */
export interface TestCase<F extends (...args: any[]) => any> {
  /**
   * The arguments to pass to the pure function.
   */
  readonly args: Parameters<F>;

  /**
   * The expected result from the function.
   * If the function is expected to throw an error, this should be an Error object.
   */
  readonly expectedResult: ReturnType<F> | Error;

  /**
   * An optional function to be executed before the pure function. Useful for setting up.
   */
  readonly before?: () => void;

  /**
   * An optional function to be executed after the pure function. Useful for cleaning up.
   */
  readonly after?: () => void;

  /**
   * An optional function to be executed if the pure function throws an error.
   * If not provided, the error will be re-thrown.
   */
  readonly onError?: (error: Error) => void;
}
