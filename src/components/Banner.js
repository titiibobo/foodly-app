import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import ProjectImg2 from '../assets/images/projectImg2.png'
import {container, font_P0, padSpace, magSpace_TB, RGBverylightgrey} from '../styling/globalStyles'


 const Banner =({
  image,
  text = 'Put text here'

}) =>{
  return (
    <View style={[styles.container, styles.magSpace_TB, styles.box]}>
      <Image
        source={image}
        style={{height: 150, width: 350, borderRadius: 34}}
      />
      <Text style={[styles.font_P0, styles.padSpace]}>{text} </Text>
    </View>
  );
}

export default Banner

const styles= StyleSheet.create({
  container,
  box:{
    backgroundColor: RGBverylightgrey,
    borderRadius: 34,
    padding: 18, 
  },
  font_P0,
  padSpace,
  magSpace_TB
 
})