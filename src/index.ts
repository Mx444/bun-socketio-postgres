import { createServer } from "node:http";
import { createApp } from "./server";
import { setupSocket } from "./socket";

const port = process.env.PORT || 3000;
const app = createApp();
const server = createServer(app);
const io = setupSocket(server);

server.listen(port, () => console.log(`Server is running http://localhost:${port}`));
