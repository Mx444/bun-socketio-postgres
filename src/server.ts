import express, { type Response, type Request } from "express";
import { routerMessages } from "./routes/messages";
import cors from "cors";

export const createApp = () => {
  const app = express();

  app.use(express.json());

  const corsOptions = {
    origin: `*`,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  app.use(cors(corsOptions));

  app.get("", (req: Request, res: Response) => {
    res.send("Hello World!");
  });

  app.use("/messages", routerMessages);

  return app;
};
