import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';

export default function ChatScreen({route}: any) {
  const dispatch: any = useDispatch();
  const selfUser = useSelector((state: any) => state.selfUser);

  return (
    <GiftedChat
      renderUsernameOnMessage
      messages={[]}
      user={{_id: selfUser.userId}}
      onSend={(messages: any) =>
        dispatch({
          type: 'server/private-message',
          data: {text: messages[0].text, to: route.params.userId},
        })
      }
    />
  );
}
