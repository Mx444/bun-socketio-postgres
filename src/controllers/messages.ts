import { pool } from "../config/database";

class MessageController {
  public async socketCreateMessage(username: string, content: string) {
    try {
      const connect = await pool.connect();
      const query = "INSERT INTO messages (username, content) VALUES ($1, $2) RETURNING *";
      const values = [username, content];
      const savedMessage = await connect.query(query, values);
      connect.release();

      return savedMessage.rows[0];
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create message.");
    }
  }

  public async socketGetMessages() {
    try {
      const connect = await pool.connect();
      const query = "SELECT * FROM messages ORDER BY created_at ASC";
      const result = await connect.query(query);
      connect.release();

      return result.rows;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve messages.");
    }
  }
}

export default new MessageController();
