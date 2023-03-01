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
  socket.on("action", (action) => {
    switch (action.type) {
      case "server/hello":
        console.log("Got hello event", action.data);
        socket.emit("action", { type: "message", data: "Good day!" });
        break;
      case "server/join":
        console.log("Got join event", action.data);
        users[socket.id].username = action.data;
        users[socket.id].avatar = createUserAvatarUrl();
        const values = Object.values(users);
        const onlyWithUserNames = values.filter(
          (user: any) => user.username !== undefined
        );
        io.emit("action", {
          type: "users_online",
          data: onlyWithUserNames,
        });
        break;
    }
  });
});

io.listen(3002);
