import { testPureFunction } from "../../../shared";
import { isEnvironmentName } from "./is-environment-name";

describe(isEnvironmentName.name, () => {
	testPureFunction({
		pureFunction: isEnvironmentName,
		testCases: [
			{
				args: ["dev"],
				expectedResult: false,
			},
			{
				args: ["development"],
				expectedResult: true,
			},
			{
				args: ["test"],
				expectedResult: false,
			},
			{
				args: ["testing"],
				expectedResult: true,
			},
		],
	});
});
