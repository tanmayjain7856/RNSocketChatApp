import { Server } from "socket.io";
import handleMessage from "./handlers/message.handler";

const io = new Server({});

let currentUserId = 2;

const userIds: any = {};

io.on("connection", (socket) => {
  console.log("User Connected!");
  console.log(socket.id);
  userIds[socket.id] = currentUserId++;
  handleMessage(socket, userIds);
});

io.listen(3002);
