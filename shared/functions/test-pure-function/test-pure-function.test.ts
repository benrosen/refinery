import { testPureFunction } from "./test-pure-function";

describe(testPureFunction.name, () => {
	let globalState: number;
	const pureFunctionNoArg = () => 42;
	const pureFunctionOneArg = (a: number) => a * 2;
	const pureFunctionMultiArg = (a: number, b: number) => a * b;
	const pureFunctionThrow = () => {
		throw new Error("Error occurred!");
	};
	const pureFunctionAsync = async (a: number) => a * 3;
	const beforeFunction = () => {
		globalState = 100;
	};
	const afterFunction = () => {
		globalState = 0;
	};
	const onErrorFunction = (error: Error) => {
		return;
	};

	testPureFunction({
		pureFunction: pureFunctionNoArg,
		testCases: [
			{
				args: [],
				expectedResult: 42,
			},
		],
	});

	testPureFunction({
		pureFunction: pureFunctionOneArg,
		testCases: [
			{
				args: [2],
				expectedResult: 4,
			},
		],
	});

	testPureFunction({
		pureFunction: pureFunctionMultiArg,
		testCases: [
			{
				args: [2, 3],
				expectedResult: 6,
			},
		],
	});

	testPureFunction({
		pureFunction: pureFunctionThrow,
		testCases: [
			{
				args: [],
				expectedResult: new Error("Error occurred!"),
				onError: onErrorFunction,
			},
		],
	});

	testPureFunction({
		pureFunction: pureFunctionAsync,
		testCases: [
			{
				args: [3],
				expectedResult: Promise.resolve(9),
			},
		],
	});

	testPureFunction({
		pureFunction: pureFunctionNoArg,
		testCases: [],
	});

	testPureFunction({
		pureFunction: pureFunctionOneArg,
		testCases: [
			{
				args: [2],
				expectedResult: 4,
			},
		],
	});

	testPureFunction({
		pureFunction: pureFunctionMultiArg,
		testCases: [
			{ args: [2, 3], expectedResult: 6 },
			{ args: [4, 5], expectedResult: 20 },
		],
	});

	testPureFunction({
		pureFunction: pureFunctionOneArg,
		testCases: [
			{
				args: [2],
				expectedResult: 4,
				before: beforeFunction,
				after: afterFunction,
			},
		],
	});
});
