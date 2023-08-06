import { Application } from "express";

/**
 * An Express server.
 */
export type Server = {
	/**
	 * Start the server.
	 */
	readonly start: () => Promise<void>;

	/**
	 * Stop the server.
	 */
	readonly stop: () => Promise<void>;

	/**
	 * The Express application instance used by the server.
	 */
	readonly expressApplication: Application;

	/**
	 * The Express server instance used by the server.
	 */
	readonly expressServer: ReturnType<Application["listen"]>;
};
