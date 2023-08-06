import { randomUUID } from "node:crypto";
import supertest, { SuperTest, Test } from "supertest";
import { Server } from "../../types";
import { createServer } from "./create-server";
import resetAllMocks = jest.resetAllMocks;

describe("Server", () => {
	let server: Server;
	let request: SuperTest<Test>;

	beforeAll(async () => {
		server = createServer();
		await server.start();
		request = supertest(server.expressApplication);
	});

	beforeEach(() => {
		resetAllMocks();
	});

	afterAll(async () => {
		await server.stop();
	});

	test("/status endpoint", async () => {
		const response = await request.get("/status");
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty("uptime");
	});

	test("/api/query/:key endpoint", async () => {
		const response = await request.get(`/api/query/${randomUUID()}`);
		expect(response.status).toBe(404);
	});

	test("/api/mutation/:key endpoint", async () => {
		const response = await request
			.post("/api/mutation/test")
			.send({ data: "test" });
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ data: "test" });
	});

	test("/api/publication/:topic endpoint", async () => {
		const response = await request
			.post("/api/publication/test")
			.send({ data: "test" });
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ data: "test" });
	});

	test.todo("/api/subscription/:topic endpoint");
});
