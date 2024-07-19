import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import messages from "../controllers/messages";

export const setupSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: { origin: `*`, methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"] },
  });

  io.on("connection", async (socket) => {
    console.log("A user connected!");

    try {
      const message = await messages.socketGetMessages();
      socket.emit("previous-messages", message);
    } catch (error) {
      console.error(error);
    }

    socket.on("message-sent", async (data) => {
      const { username, content } = data;
      try {
        const message = await messages.socketCreateMessage(username, content);
        io.emit("message-received", message);
        console.log(message);
      } catch (err) {
        console.error(err);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  return io;
};
