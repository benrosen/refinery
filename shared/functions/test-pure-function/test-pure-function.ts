import { TestCase } from "../../types";

/**
 * This function is a test utility that executes provided test cases against a pure function.
 *
 * @typeParam F The type of the function under test.
 *
 * @param params The parameters for the test run.
 * @param params.pureFunction The pure function that is being tested.
 * @param params.testCases The test cases that should be run against the function.
 *
 * This function uses Jest's `test.each` function to run each test case,
 * which includes a pre-call setup, function call, error handling, and post-call cleanup.
 */
export const testPureFunction = <
	F extends (...args: any[]) => any | Promise<any>,
>({
	pureFunction,
	testCases,
}: {
	readonly pureFunction: F;
	readonly testCases: ReadonlyArray<TestCase<F>>;
}): void => {
	if (testCases.length === 0) {
		return;
	}

	test.each(testCases)(
		"should return the expected result when called with %j",
		({ args, expectedResult, before, after, onError }) => {
			if (typeof before === "function") {
				before();
			}

			try {
				const result = pureFunction(...args);
				expect(result).toEqual(expectedResult);
			} catch (error) {
				if (typeof onError === "function") {
					onError(error);
				} else {
					throw error;
				}
			}

			if (typeof after === "function") {
				after();
			}
		},
	);
};
