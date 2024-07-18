import express, { type Response, type Request } from "express";
import { pool } from "../config/database";
import { handleError } from "../utils/handleError";

export const routerMessages = express.Router();

routerMessages.get("/", async (req: Request, res: Response) => {
  try {
    const connect = await pool.connect();

    const query = "SELECT * FROM messages ORDER BY created_at ASC";
    const result = await connect.query(query);

    connect.release();

    res.status(200).json({ message: result.rows });
  } catch (error) {
    handleError(res, 500, error);
  }
});

routerMessages.post("/", async (req: Request, res: Response) => {
  const { username, content } = req.body;

  try {
    const connect = await pool.connect();

    const query = "INSERT INTO messages (username, content) VALUES ($1, $2)";
    const values = [username, content];
    await connect.query(query, values);

    connect.release();

    res.status(200).json({ message: "Message created successfully!" });
  } catch (error) {
    handleError(res, 500, error);
  }
});
