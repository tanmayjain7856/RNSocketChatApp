import { Server } from "socket.io";

const io = new Server({});

io.on("connection", (socket) => {
  console.log("User Connected!");
  socket.on("message", (message) => {
    console.log(message);
  });
});

io.listen(3002);
