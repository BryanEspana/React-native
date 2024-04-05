import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import {Dimensions} from 'react-native';

//const {width, height} = Dimensions.get('window');
export const DimensionScreen = () => {
    const {width, height} = useWindowDimensions(); 
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        

    </View>
  )
}

export default DimensionScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: 'grey',
       
       flexDirection: 'row',
       justifyContent: 'space-between',
       flexWrap: 'wrap',
       padding: 10,
       columnGap: 10,
       rowGap: 5,

    },
    box:{
        width: 100,
        height: 100,
    },
   box1: {
    backgroundColor: '#090958',
   },
   box2: {
    backgroundColor: '#13138b',
   },
   box3: {
    backgroundColor: '#2727b4',
   },
   box4: {
    backgroundColor: '#5b5bd2',
   }
});