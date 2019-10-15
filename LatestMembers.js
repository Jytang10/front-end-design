//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class LatestMembers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:22, paddingTop:15}}>Latest Members</Text>
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
