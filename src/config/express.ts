import express, { type Response, type Request } from "express";
import { routerMessages } from "../routes/messages";
import cors from "cors";
import path from "path";
export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(express.static(path.join(__dirname, "..", "..", "public")));
  console.log("Static files served from:", path.join(__dirname, "public"));
  const corsOptions = {
    origin: `*`,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };
  app.use(cors(corsOptions));

  app.get("", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
  });

  app.use("/messages", routerMessages);

  return app;
};
