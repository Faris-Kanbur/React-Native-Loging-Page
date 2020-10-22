import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export {Button};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#82ada9',
    padding: 10,
    width: Dimensions.get('window').width / 2,
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});
