import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class TweetItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: this.props.imageUri,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{`@${this.props.name}`}</Text>
          <Text>{this.props.text}</Text>
          <Text>{`♡${this.props.like}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    height: '100%',
  },
  nameText: {
    fontWeight: 'bold',
  },
});
