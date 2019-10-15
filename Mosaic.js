//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import data from './data';
import {LinearGradient} from 'expo-linear-gradient';

// create a component
class Mosaic extends Component {

  state = {
    data:data
  }

  mosaic = () => {
    return this.state.data.map(singleData => {
      return (
        <View key={singleData.id} style={{height:250, margin:3, flexBasis:'48%'}}>
          <ImageBackground style={{height:200}} source={{uri:singleData.image_link}}>
            <Text style={{fontWeight:'bold', fontSize:15, paddingLeft:15, color:'#fff'}}>{singleData.headline}</Text>
          </ImageBackground>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
          {this.mosaic()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height:800,
    overflow:'hidden',
    flexWrap:'wrap',
    flexDirection:'row'
  },
});

//make this component available to the app
export default Mosaic;
