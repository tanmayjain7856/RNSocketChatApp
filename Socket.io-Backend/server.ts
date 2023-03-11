import { Server } from "socket.io";
import handleMessage from "./handlers/message.handler";
import { v4 as uuidv4 } from "uuid";

const io = new Server({});

const users: any = {};

console.log(uuidv4());

function createUserAvatarUrl() {
  const rand1 = Math.round(Math.random() * 200 + 100);
  const rand2 = Math.round(Math.random() * 200 + 100);
  return `https://picsum.photos/${rand1}/${rand2}`;
}

function createUsersOnline() {
  const values = Object.values(users);
  const onlyWithUserNames = values.filter(
    (user: any) => user.username !== undefined
  );
  return onlyWithUserNames;
}

io.on("connection", (socket) => {
  console.log("User Connected!");
  console.log(socket.id);
  users[socket.id] = { userId: uuidv4() };
  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("action", {
      type: "users_online",
      data: createUsersOnline(),
    });
  });
  socket.on("action", (action) => {
    switch (action.type) {
      case "server/join":
        console.log("Got join event", action.data);
        users[socket.id].username = action.data;
        users[socket.id].avatar = createUserAvatarUrl();
        io.emit("action", {
          type: "users_online",
          data: createUsersOnline(),
        });
        socket.emit("action", { type: "self_user", data: users[socket.id] });
        break;
      case "server/private-message":
        console.log("Got a private message", action.data);
        break;
    }
  });
});

io.listen(3000);
