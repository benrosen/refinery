import { emit } from "./emit"; // Adjust the import path accordingly

// Mock the global fetch function
global.fetch = jest.fn();

describe("emit", () => {
	beforeEach(() => {
		// Clear all instances and calls to constructor and all methods
		(global.fetch as jest.Mock).mockClear();
	});

	it("should send a POST request with correct URL and payload", async () => {
		(global.fetch as jest.Mock).mockResolvedValue({
			ok: true,
		});

		const topic = "testTopic";
		const data = { key: "value" };

		await emit(topic, data);

		expect(global.fetch).toHaveBeenCalledTimes(1);
		expect(global.fetch).toHaveBeenCalledWith(
			`/topic/${encodeURIComponent(topic)}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			},
		);
	});

	it("should throw an error if the response is not ok", async () => {
		(global.fetch as jest.Mock).mockResolvedValue({
			ok: false,
			statusText: "Bad Request",
		});

		const topic = "testTopic";
		const data = { key: "value" };

		await expect(emit(topic, data)).rejects.toThrow("Bad Request");
	});
});
