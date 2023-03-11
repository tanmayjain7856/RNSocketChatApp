import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';

export default function ChatScreen({route}: any) {
  const dispatch: any = useDispatch();
  const selfUser = useSelector((state: any) => state.selfUser);
  const conversations = useSelector((state: any) => state.conversations);
  const userId = route.params.userId;
  const messages = conversations[userId].messages;

  return (
    <GiftedChat
      renderUsernameOnMessage
      messages={messages}
      user={{_id: selfUser.userId}}
      onSend={(message: any) => {
        dispatch({
          type: 'private_message',
          data: {message: message[0], conversationId: userId},
        });
        dispatch({
          type: 'server/private_message',
          data: {message: message[0], conversationId: userId},
        });
      }}
    />
  );
}
