import { createServer } from "http";
import { createApp } from "./server";
import { setupSocket } from "./socket";

const app = createApp();
const server = createServer(app);
const io = setupSocket(server);

server.listen(3000, () => console.log(`Server is running http://localhost:${3000}`));
app.listen(8080, () => console.log(`Server is running http://localhost:${8080}`));
