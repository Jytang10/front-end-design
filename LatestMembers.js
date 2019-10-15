//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from './data';

// create a component
class LatestMembers extends Component {

  state = {
    data:data
  }

  getLatestMembers = () => {
    return this.state.data.map(singleData => {
      return (
        <View style={{}} key={singleData.id}>
          <Text>{singleData.username}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:22, paddingTop:15}}>Latest Members</Text>
        <View>
          {this.getLatestMembers()}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {

  },
});

//make this component available to the app
export default LatestMembers;
