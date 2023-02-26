import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import io from 'socket.io-client';
import styles from '../../styles/style';

export default function ChatScreen() {
  useEffect(() => {
    io('http://192.168.1.4:3002');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
    </View>
  );
}
