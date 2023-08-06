#!usr/bin/env ts-node

import { createServer } from "./functions";

(async () => {
	const server = createServer();

	await server.start();
})();
