import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TweetItem from './components/TweetItem';

export default function App() {
  return (
    <View style={styles.container}>
      <TweetItem
        name="Ken"
        text="Hello world"
        like={15}
        imageUri="https://picsum.photos/id/3/200/200"
      />
      <TweetItem
        name="Taro"
        text="Hey"
        like={20}
        imageUri="https://picsum.photos/id/1/200/200"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
