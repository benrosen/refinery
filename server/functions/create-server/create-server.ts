import cors from "cors";
import express from "express";
import helmet from "helmet";
import { Configuration, Server } from "../../types";
import { getConfiguration } from "../get-configuration";

export const createServer = (
  { port, path }: Configuration = getConfiguration(),
): Server => {
  // TODO get rid of custom errors
  // TODO get rid of test pure function
  const expressApplication = express();

  expressApplication.use(cors());
  expressApplication.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "script-src": ["'self'", "blob:"],
          "worker-src": ["'self'", "blob:"],
        },
      },
    }),
  );
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

  expressApplication.get("/status", (req, res) => {
    const uptime = process.uptime();
    res.json({ uptime });
  });

  let server: Server["expressServer"];

  return {
    start: () => {
      return new Promise(async (resolve, reject) => {
        try {
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
