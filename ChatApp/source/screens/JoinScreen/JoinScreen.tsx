import React from 'react';
import {View, TextInput, Image, Button} from 'react-native';
import styles from '../../styles/style';

export default function JoinScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/chat-icon.png')}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <View style={styles.inputContainerStyle}>
        <TextInput
          placeholder="Enter Username"
          placeholderTextColor="#999"
          style={styles.textInputStyle}
        />
        <Button title="Join Chat" />
      </View>
    </View>
  );
}
