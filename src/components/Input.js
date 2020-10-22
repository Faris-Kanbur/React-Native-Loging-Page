import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';

const Input = ({holder}) => {
  return (
    <View style={styeles.container}>
      <TextInput placeholder={holder} />
    </View>
  );
};
export {Input};

const styeles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: Platform.OS == 'ios' ? 15 : 5,
    margin: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
});
