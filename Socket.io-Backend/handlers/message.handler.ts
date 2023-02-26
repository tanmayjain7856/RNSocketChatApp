let currentMessageId = 1;

function createMessage(userId: any, textMessage: any) {
  return {
    _id: currentMessageId++,
    text: textMessage,
    createdAt: new Date(),
    user: {
      _id: userId,
      name: "Test User",
      avatar: "https://placeimg.com/140/140/any",
    },
  };
}

export default function handleMessage(socket: any, userIds: any) {
  socket.on("message", (textMessage: any) => {
    const userId = userIds[socket.id];
    const message = createMessage(userId, textMessage);
    console.log(message);
    socket.broadcast.emit("message", message);
  });
}
