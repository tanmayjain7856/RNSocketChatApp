let currentMessageId = 1;

function createMessage(user: any, textMessage: any) {
  return {
    _id: currentMessageId++,
    text: textMessage,
    createdAt: new Date(),
    user: {
      _id: user.userId,
      name: user.username,
      avatar: "https://placeimg.com/140/140/any",
    },
  };
}

export default function handleMessage(socket: any, users: any) {
  socket.on("message", (textMessage: any) => {
    const user = users[socket.id];
    const message = createMessage(user, textMessage);
    console.log(message);
    socket.broadcast.emit("message", message);
  });
}
