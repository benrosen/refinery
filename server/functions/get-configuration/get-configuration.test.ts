import { testPureFunction } from "../../../shared/";
import { MissingEnvironmentConfigurationError } from "../../errors";
import { EnvironmentName } from "../../types";
import { getEnvironmentName } from "../get-environment-name";
import { getConfiguration } from "./get-configuration";

jest.mock("../get-environment-name");

describe(getConfiguration.name, () => {
	testPureFunction({
		pureFunction: getConfiguration,
		testCases: [
			{
				// Test case: no environment name provided and getEnvironmentName returns "development"
				args: [],
				before: () => {
					(getEnvironmentName as jest.Mock).mockReturnValue("development");
				},
				expectedResult: {
					port: expect.any(Number),
					path: expect.any(String),
					environmentName: "development",
				},
			},
			{
				// Test case: no environment name provided and getEnvironmentName returns "invalid"
				args: [],
				before: () => {
					(getEnvironmentName as jest.Mock).mockReturnValue("invalid");
				},
				expectedResult: new MissingEnvironmentConfigurationError({
					environmentName: "invalid" as EnvironmentName,
				}),
				onError: (error) => {
					expect(error).toBeInstanceOf(MissingEnvironmentConfigurationError);
				},
			},
			{
				// Test case: no environment name provided and getEnvironmentName throws
				args: [],
				before: () => {
					(getEnvironmentName as jest.Mock).mockImplementation(() => {
						throw new Error("An error occurred.");
					});
				},
				expectedResult: new Error("An error occurred."),
				onError: (error) => {
					expect(error).toBeInstanceOf(Error);
				},
			},
			{
				// Test case: no configuration for the provided environment name
				args: [{ environmentName: "nonExistentEnv" as EnvironmentName }],
				expectedResult: new MissingEnvironmentConfigurationError({
					environmentName: "nonExistentEnv" as EnvironmentName,
				}),
				onError: (error) => {
					expect(error).toBeInstanceOf(MissingEnvironmentConfigurationError);
				},
			},
			{
				// Test case: happy path
				args: [{ environmentName: "production" }],
				expectedResult: {
					port: expect.any(Number),
					path: expect.any(String),
					environmentName: "production",
				},
			},
		],
	});
});
