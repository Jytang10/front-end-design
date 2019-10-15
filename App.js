//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
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
            renderItems={({item}) => (
              <View style={styles.rowStyle}>
                <View style={styles.imageContainer}>
                  <Image source={item.image_link}></Image>
                </View>
                <View>
                  
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
    backgroundColor:"#a4b0be"
  },
  imageContainer: {

  }
});

//make this component available to the app
export default App;
