export type DatabaseClient = {
	createQuery: (key: string) => Promise<string | null>;
	createMutation: (key: string, value: string) => Promise<string>;
	createConnection: () => Promise<void>;
	deleteConnection: () => Promise<void>;
};
