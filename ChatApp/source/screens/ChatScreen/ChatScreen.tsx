import React, {useEffect, useState, useRef} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import io from 'socket.io-client';

export default function ChatScreen() {
  const [recvMessagesFromServer, setRecvMessagesFromServer] = useState<any>([]);

  const socket = useRef<any>(null);

  useEffect(() => {
    socket.current = io('http://192.168.1.4:3002');
    socket.current.on('message', (message: any) => {
      setRecvMessagesFromServer((prevState: any) =>
        GiftedChat.append(prevState, message),
      );
    });
  }, []);

  function sendMessageToServer(messages: any) {
    socket.current.emit('message', messages[0].text);
    setRecvMessagesFromServer((prevState: IMessage[] | undefined) =>
      GiftedChat.append(prevState, messages),
    );
  }

  return (
    <GiftedChat
      messages={recvMessagesFromServer}
      user={{_id: 1}}
      onSend={messages => sendMessageToServer(messages)}
    />
  );
}
