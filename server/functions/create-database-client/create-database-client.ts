import { createClient } from "redis";
import { DatabaseClient } from "../../types/database-client";

export const createDatabaseClient = (): DatabaseClient => {
	const redisClient = createClient();

	redisClient.on("error", function (error) {
		console.error(error);
	});

	return {
		createQuery: async (key: string): Promise<string | null> => {
			try {
				return await redisClient.get(key);
			} catch (error) {
				console.error(error);

				return null;
			}
		},
		createMutation: async (key: string, value: string): Promise<string> => {
			try {
				await redisClient.set(key, value);

				return value;
			} catch (error) {
				console.error(error);

				return "";
			}
		},
		createConnection: async (): Promise<void> => {
			try {
				await redisClient.connect();
			} catch (error) {
				console.error(error);
			}
		},
		deleteConnection: async (): Promise<void> => {
			try {
				await redisClient.disconnect();
			} catch (error) {
				console.error(error);
			}
		},
	};
};
