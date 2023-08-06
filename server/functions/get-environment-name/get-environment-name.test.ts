import { describe } from "node:test";
import { testPureFunction } from "../../../shared";
import { InvalidEnvironmentNameError } from "../../errors";
import { getEnvironmentName } from "./get-environment-name";

// Mock the environment variable
const originalNodeEnv = process.env.NODE_ENV;

beforeEach(() => {
	jest.resetModules(); // this is important
	process.env.NODE_ENV = originalNodeEnv;
});

afterEach(() => {
	process.env.NODE_ENV = originalNodeEnv;
});

describe(getEnvironmentName.name, async () => {
	testPureFunction({
		pureFunction: getEnvironmentName,
		testCases: [
			{
				args: [], // `getEnvironmentName` doesn't take any arguments
				expectedResult: "production",
				before: () => {
					process.env.NODE_ENV = "production";
				},
			},
			{
				args: [],
				expectedResult: "development",
				before: () => {
					process.env.NODE_ENV = "development";
				},
			},
			{
				args: [],
				expectedResult: new InvalidEnvironmentNameError({
					environmentName: "invalid",
				}),
				before: () => {
					process.env.NODE_ENV = "invalid";
				},
				onError: (error) => {
					expect(error).toBeInstanceOf(InvalidEnvironmentNameError);
				},
			},
		],
	});
});
