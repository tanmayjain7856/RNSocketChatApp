import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDispatch} from 'react-redux';

export default function ChatScreen({route}: any) {
  const dispatch: any = useDispatch();

  return (
    <GiftedChat
      renderUsernameOnMessage
      messages={[]}
      user={{_id: 1}}
      onSend={(messages: any) =>
        dispatch({
          type: 'server/private-message',
          data: {text: messages[0].text, to: route.params.userId},
        })
      }
    />
  );
}
