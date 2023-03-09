import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/style';
import {useSelector} from 'react-redux';

export default function FriendListScreen({navigation}: any) {
  const usersOnline = useSelector((state: any) => state.usersOnline);

  return (
    <View style={styles.secondaryContainer}>
      <FlatList
        data={usersOnline}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChatScreen', {userId: item.userId})
              }>
              <View style={styles.userListItemContainer}>
                <Image
                  source={{uri: item.avatar}}
                  style={styles.userListItemImageStyle}
                />
                <Text style={styles.userListItemTextStyle}>
                  {item.username}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.userId}
      />
    </View>
  );
}
