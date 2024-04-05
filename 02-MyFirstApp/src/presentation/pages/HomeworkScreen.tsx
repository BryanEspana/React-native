import React from 'react'
import { StyleSheet, View } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
    </View>
  )
}

export default HomeworkScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
        width: 100,
        height: 100,
        borderColor: 'white',
        borderWidth: 10,
    },
    box1: {
        backgroundColor: '#28425B',
    },
    box2: {
        backgroundColor: '#5856D6',
        position: 'absolute',
        right: 100,
        
        
    },
    box3: {
        backgroundColor: '#F0A23B',
    },

});