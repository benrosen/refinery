import cors from "cors";
import express from "express";
import ServerSentEvents from "express-sse";
import helmet from "helmet";
import { Configuration, Server } from "../../types";
import { createDatabaseClient } from "../create-database-client";
import { getConfiguration } from "../get-configuration";

export const createServer = (
	{ port, path }: Configuration = getConfiguration(),
): Server => {
	// TODO get rid of custom errors
	// TODO get rid of test pure function
	const expressApplication = express();
	const databaseClient = createDatabaseClient();
	const sse = new ServerSentEvents();

	expressApplication.use(cors());
	expressApplication.use(helmet());
	expressApplication.use(express.json());

	expressApplication.use((req, res, next) => {
		console.log(`${req.method} ${req.url}`);
		next();
	});

	expressApplication.use((err, req, res, next) => {
		console.error(err);
		res.status(500).send("Internal Server Error");
	});

	expressApplication.use(express.static(path));

	// Query
	expressApplication.get("/key/:key", async (req, res) => {
		const key = req.params.key;

		try {
			const response = await databaseClient.createQuery(key);

			if (response) {
				res.json(JSON.parse(response));
			} else {
				res.status(404).json({ error: "Not Found" });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// Mutation
	expressApplication.post("/key/:key", async (req, res) => {
		const key = req.params.key;
		const data = req.body;
		try {
			const response = await databaseClient.createMutation(
				key,
				JSON.stringify(data),
			);
			res.json(data);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	});

	// Publication
	expressApplication.post("/topic/:topic", (req, res) => {
		const topic = req.params.topic;
		const data = req.body;
		sse.send(data, topic);
		res.json(data);
	});

	// Subscription
	expressApplication.get("/topic/:topic", sse.init);

	expressApplication.get("/status", (req, res) => {
		const uptime = process.uptime();
		res.json({ uptime });
	});

	let server: Server["expressServer"];

	return {
		start: () => {
			return new Promise(async (resolve, reject) => {
				try {
					await databaseClient.createConnection();

					server = expressApplication.listen(port, () => {
						console.log(`Server listening on port ${port}`);
						resolve();
					});
				} catch (error) {
					console.error(error);
					reject();
				}
			});
		},
		stop: () => {
			return new Promise(async (resolve, reject) => {
				try {
					await databaseClient.deleteConnection();

					server.close(() => {
						console.log("Server stopped");
						resolve();
					});
				} catch (error) {
					console.error(error);
					reject();
				}
			});
		},
		expressApplication,
		expressServer: server,
	};
};
