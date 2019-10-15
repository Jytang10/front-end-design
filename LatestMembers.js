//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import data from './data';

// create a component
class LatestMembers extends Component {

  state = {
    data:data
  }

  getLatestMembers = () => {
    return this.state.data.map(singleData => {
      return (
        <View style={{alignItems:'center', padding:5}} key={singleData.id}>
          <Image style={{height:50, width:50, borderRadius:25}} source={{uri:singleData.user_avatar}}></Image>
          <Text>{singleData.username}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:22, paddingTop:15}}>Latest Members</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.getLatestMembers()}
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#a4b0be',
    paddingVertical:5
  },
});

//make this component available to the app
export default LatestMembers;
