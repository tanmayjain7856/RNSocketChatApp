import { Server } from "socket.io";
import handleMessage from "./handlers/message.handler";

const io = new Server({});

let currentUserId = 2;

const users: any = {};

io.on("connection", (socket) => {
  console.log("User Connected!");
  console.log(socket.id);
  users[socket.id] = { userId: currentUserId++ };
  socket.on("join", (username) => {
    users[socket.id].username = username;
  });
  handleMessage(socket, users);
});

io.listen(3002);
