import { Server } from "socket.io";
import handleMessage from "./handlers/message.handler";

const io = new Server({});

let currentUserId = 2;

const users: any = {};

function createUserAvatarUrl() {
  const rand1 = Math.round(Math.random() * 200 + 100);
  const rand2 = Math.round(Math.random() * 200 + 100);
  return `https://picsum.photos/${rand1}/${rand2}`;
}

io.on("connection", (socket) => {
  console.log("User Connected!");
  console.log(socket.id);
  users[socket.id] = { userId: currentUserId++ };
  socket.on("join", (username) => {
    users[socket.id].username = username;
    users[socket.id].avatar = createUserAvatarUrl();
    handleMessage(socket, users);
  });
});

io.listen(3002);
