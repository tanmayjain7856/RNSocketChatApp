import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TextInput} from 'react-native';
import io from 'socket.io-client';
import styles from '../../styles/style';

export default function ChatScreen() {
  const [messageToSend, setMessageToSend] = useState('');
  const [recvMessagesFromServer, setRecvMessagesFromServer] = useState<any>([]);

  const socket = useRef<any>(null);

  useEffect(() => {
    socket.current = io('http://192.168.1.4:3002');
    socket.current.on('message', (message: any) => {
      setRecvMessagesFromServer((prevState: any) => [...prevState, message]);
    });
  }, []);

  function sendMessageToServer() {
    socket.current.emit('message', messageToSend);
    setMessageToSend('');
  }

  const displayChatMessages = recvMessagesFromServer.map((msg: any) => (
    <Text style={styles.textStyle} key={msg}>
      {msg}
    </Text>
  ));

  return (
    <View style={styles.container}>
      {displayChatMessages}
      <TextInput
        value={messageToSend}
        placeholder="Enter chat message..."
        placeholderTextColor="#999"
        onChangeText={(text: any) => setMessageToSend(text)}
        style={styles.textInputStyle}
        onSubmitEditing={sendMessageToServer}
      />
    </View>
  );
}
