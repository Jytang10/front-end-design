//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from './data';

// create a component
class Mosaic extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mosaic</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Mosaic;
