//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import LatestMembers from './LatestMembers';

// create a component
class App extends Component {
  render() {
    return (
      <View style={{flex:1, padding:5}}>
        <Heading></Heading>
        <Hero></Hero>
        <LatestMembers></LatestMembers>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default App;
