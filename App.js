import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TweetItem from './components/TweetItem';

export default function App() {
  this.state = {
    tweets: [
      {
        name: 'Ken',
        text: 'Hello world',
        like: 15,
        imageUri: 'https://picsum.photos/id/3/200/200',
      },
      {
        name: 'Takeshi',
        text: 'Hey',
        like: 1,
        imageUri: 'https://picsum.photos/id/1/200/200',
      },
    ],
  };

  const tweetItems = this.state.tweets.map((tweet, index) => {
    return (
      <TweetItem
        name={tweet.name}
        text={tweet.text}
        like={tweet.like}
        imageUri={tweet.imageUri}
        key={index}
      />
    );
  });
  return <View style={styles.container}>{tweetItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
