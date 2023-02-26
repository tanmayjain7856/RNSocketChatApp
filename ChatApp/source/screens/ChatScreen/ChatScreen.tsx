import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import io from 'socket.io-client';
import styles from '../../styles/style';

export default function ChatScreen() {
  const [messageToSend, setMessageToSend] = useState('');

  useEffect(() => {
    io('http://192.168.1.4:3002');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello React Native!</Text>
      <TextInput
        value={messageToSend}
        placeholder="Enter chat message..."
        placeholderTextColor="#999"
        onChangeText={(text: any) => setMessageToSend(text)}
        style={styles.textInputStyle}
      />
    </View>
  );
}
