import { Server } from "socket.io";

const io = new Server({});

io.on("connection", function () {
  console.log("User Connected!");
});

io.listen(3002);
