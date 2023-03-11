import { Server } from "socket.io";
import { v4 as uuidv4 } from "uuid";

const io = new Server({});

const users: any = {};

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
        users[socket.id].username = action.data;
        users[socket.id].avatar = createUserAvatarUrl();
        io.emit("action", {
          type: "users_online",
          data: createUsersOnline(),
        });
        socket.emit("action", { type: "self_user", data: users[socket.id] });
        break;
      case "server/private_message":
        const conversationId: any = action.data.conversationId;
        const from: any = users[socket.id].userId;
        const userValues: any = Object.values(users);
        const socketIds: any = Object.keys(users);
        for (let i = 0; i < userValues.length; i++) {
          if (userValues[i].userId === conversationId) {
            const socketId = socketIds[i];
            io.sockets.sockets[socketId].emit("action", {
              type: "private_message",
              data: { ...action.data, conversationId: from },
            });
            break;
          }
        }
        break;
    }
  });
});

io.listen(3001);
