import React, {useState} from 'react';
import {View, TextInput, Image, Button} from 'react-native';
import styles from '../../styles/style';
import {useDispatch} from 'react-redux';

export default function JoinScreen({navigation}: any) {
  const [username, setUsername] = useState<any>();

  const dispatch: any = useDispatch();

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
        <Button
          title="Join Chat"
          onPress={() => {
            dispatch({type: 'server/join', data: username});
            navigation.navigate('ChatScreen');
          }}
        />
      </View>
    </View>
  );
}
