//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Heading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontSize:15, marginVertical:15}}>Basic UI Demo</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ff7550',
    borderRadius:8,
    shadowOpacity: 0.75,
    marginTop:30
  },
});

//make this component available to the app
export default Heading;
