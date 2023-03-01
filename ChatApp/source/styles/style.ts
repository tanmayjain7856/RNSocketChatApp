import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  inputContainerStyle: {flex: 1, justifyContent: 'space-around'},
  textInputStyle: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
  },
  imageStyle: {
    flex: 1,
  },
  userListItemContainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  userListItemImageStyle: {width: 50, height: 50, borderRadius: 50},
  userListItemTextStyle: {color: '#000', fontSize: 16, marginLeft: 20},
});

export default styles;
