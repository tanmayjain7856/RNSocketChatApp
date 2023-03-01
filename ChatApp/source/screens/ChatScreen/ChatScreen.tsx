import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

export default function ChatScreen() {
  return (
    <GiftedChat
      renderUsernameOnMessage
      messages={[]}
      user={{_id: 1}}
      // onSend={messages => sendMessageToServer(messages)}
    />
  );
}
