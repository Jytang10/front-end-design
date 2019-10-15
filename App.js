//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import LatestMembers from './LatestMembers';
import Mosaic from './Mosaic';
import data from './data';

// create a component
class App extends Component {

  state = {
    data:data
  }

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
          <Text style={{fontWeight:'bold', fontSize:24, marginTop:10, paddingLeft:6}}>
            News
          </Text>
          <FlatList 
            style={{width:'100%'}}
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.rowStyle}>
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri:item.image_link}}></Image>
                </View>
                <View style={styles.rightSideContent}>
                  <Text>{item.headline}</Text>
                </View>
              </View>
            )}
          >

          </FlatList>
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  rowStyle: {
    flexDirection:'row',
    borderRadius:6,
    backgroundColor:"#a4b0be",
    padding:5,
    margin:5
  },
  imageContainer: {
    height:120,
    width:(Dimensions.get('window').width / 3) - 4
  },
  image: {
    flex:1,
    width:null,
    alignSelf:'stretch',
    borderRadius:10
  },
  rightSideContent:{
    width:(Dimensions.get('window').width / 1.5)
  }
});

//make this component available to the app
export default App;
