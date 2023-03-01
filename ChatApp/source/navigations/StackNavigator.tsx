import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import JoinScreen from '../screens/JoinScreen/JoinScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import FriendListScreen from '../screens/FriendListScreen/FriendListScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="JoinScreen">
      <Stack.Screen name="JoinScreen" component={JoinScreen} />
      <Stack.Screen name="FriendListScreen" component={FriendListScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
