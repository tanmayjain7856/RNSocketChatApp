import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from '../../styles/style';
import {useSelector} from 'react-redux';

export default function FriendListScreen() {
  const usersOnline = useSelector((state: any) => state.usersOnline);

  return (
    <View style={styles.container}>
      <FlatList
        data={usersOnline}
        renderItem={({item}) => {
          return <Text>{item.username}</Text>;
        }}
        keyExtractor={item => item.username}
      />
    </View>
  );
}
