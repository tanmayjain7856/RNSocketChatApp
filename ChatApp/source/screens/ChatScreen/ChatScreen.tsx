import React, {useEffect, useState, useRef} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';

export default function ChatScreen() {
  const [recvMessagesFromServer, setRecvMessagesFromServer] = useState<any>([]);

  const socket = useRef<any>(null);

  useEffect(() => {
    socket.current = io('http://192.168.1.4:3002');
    socket.current.on('message', (message: any) => {
      const testMessage = [
        {
          _id: 3,
          text: 'Hello from server',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ];
      testMessage[0].text = message;
      setRecvMessagesFromServer((prevState: any) =>
        GiftedChat.append(prevState, testMessage),
      );
    });
    setRecvMessagesFromServer([
      {
        _id: 1,
        text: 'Hello Developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello from client',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  function sendMessageToServer(messages: any) {
    socket.current.emit('message', messages[0].text);
  }

  return (
    <GiftedChat
      messages={recvMessagesFromServer}
      user={{_id: 1}}
      onSend={messages => sendMessageToServer(messages)}
    />
  );
}
