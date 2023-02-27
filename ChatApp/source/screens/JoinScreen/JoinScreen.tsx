import React, {useState} from 'react';
import {View, TextInput, Image, Button} from 'react-native';
import styles from '../../styles/style';

export default function JoinScreen({joinChat}: any) {
  const [username, setUsername] = useState<any>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/chat-icon.png')}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.inputContainerStyle}>
        <TextInput
          value={username}
          placeholder="Enter Username"
          placeholderTextColor="#999"
          style={styles.textInputStyle}
          onChangeText={text => setUsername(text)}
        />
        <Button title="Join Chat" onPress={() => joinChat(username)} />
      </View>
    </View>
  );
}
