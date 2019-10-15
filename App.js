//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import LatestMembers from './LatestMembers';
import Mosaic from './Mosaic';

// create a component
class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flex:1, padding:5}}>
          <View>
            <Heading></Heading>
            <Hero></Hero>
            <LatestMembers></LatestMembers>
          </View>
          <View>
            <Text style={{paddingTop:15, fontWeight:'bold', fontSize:22}}>
              Monday
            </Text>
          </View>
          <Mosaic></Mosaic>
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default App;
