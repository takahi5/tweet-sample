import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import TweetItem from './components/TweetItem';

export default class App extends React.Component {
  state = {
    inputText: '',
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.tweets}
          renderItem={({ item }) => (
            <TweetItem
              name={item.name}
              text={item.text}
              like={item.like}
              imageUri={item.imageUri}
            />
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <Button title="OK" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    height: 30,
    flex: 1,
    padding: 2,
  },
});
