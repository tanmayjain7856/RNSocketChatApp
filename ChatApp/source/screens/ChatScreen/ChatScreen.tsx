import React, {useEffect, useState, useRef} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';

export default function ChatScreen() {
  // const [messageToSend, setMessageToSend] = useState('');
  const [recvMessagesFromServer, setRecvMessagesFromServer] = useState<any>([]);

  const socket = useRef<any>(null);

  useEffect(() => {
    socket.current = io('http://192.168.1.4:3002');
    socket.current.on('message', (message: any) => {
      setRecvMessagesFromServer((prevState: any) => [...prevState, message]);
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
    ]);
  }, []);

  // function sendMessageToServer() {
  //   socket.current.emit('message', messageToSend);
  //   setMessageToSend('');
  // }

  return <GiftedChat messages={recvMessagesFromServer} user={{_id: 1}} />;
}
