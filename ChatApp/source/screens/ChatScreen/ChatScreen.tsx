import React, {useEffect, useState, useRef} from 'react';
import JoinScreen from '../JoinScreen/JoinScreen';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import io from 'socket.io-client';

export default function ChatScreen() {
  const [recvMessagesFromServer, setRecvMessagesFromServer] = useState<any>([]);
  const [isJoined, setIsJoined] = useState(false);

  const socket = useRef<any>(null);

  useEffect(() => {
    socket.current = io('http://192.168.0.113:3002');
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

  const joinChat = (username: any) => {
    socket.current.emit('join', username);
    setIsJoined(true);
  };

  return (
    <>
      {isJoined ? (
        <GiftedChat
          renderUsernameOnMessage
          messages={recvMessagesFromServer}
          user={{_id: 1}}
          onSend={messages => sendMessageToServer(messages)}
        />
      ) : (
        <JoinScreen joinChat={joinChat} />
      )}
    </>
  );
}
