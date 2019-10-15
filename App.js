import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import LatestMembers from './LatestMembers';
import Mosaic from './Mosaic';
import data from './data';

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
                  <Text style={{width:90, backgroundColor:'#7bed9f', textAlign:'center', borderRadius:6, paddingVertical:4}}>{item.type}</Text>
                  <Text style={styles.headlines}>{item.headline}</Text>
                  <View style={styles.avatarAndCaption}>
                    <Image style={{height:24, width:24, borderRadius:12}} source={{uri:item.user_avatar}}></Image>
                    <Text styles={{paddingLeft:10}}>{item.username}</Text>
                  </View>
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
    width:(Dimensions.get('window').width / 1.5),
    paddingLeft:8
  },
  headlines:{
    fontSize:17,
    fontWeight:'bold',
  },
  avatarAndCaption:{
    flexDirection:'row',
    alignSelf:'stretch',
    paddingTop:15
  }
});

export default App;
