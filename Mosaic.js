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
          <ImageBackground imageStyle={{borderRadius:20}} style={{height:200, position:'absolute', top:0, bottom:0, right:0, left:0}} source={{uri:singleData.image_link}}>
            <LinearGradient style={{height:200, position:'absolute', top:0, bottom:0, right:0, left:0, flexDirection:'row', borderRadius:20}} start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,1)']}>
              <Text style={{fontWeight:'bold', fontSize:15, paddingLeft:15, color:'#fff', alignSelf:'flex-end', paddingBottom:5}}>{singleData.headline}</Text>
            </LinearGradient>
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
    flexDirection:'row',
    justifyContent:'space-between'
  },
});

//make this component available to the app
export default Mosaic;
