/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    name?: string;
}


const HelloWorldScreen = ({name = 'World'} : Props) => {
  return (
    <View style={styles.container}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>Hello, {name}</Text>
    </View>

    );
};

export default HelloWorldScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding:20,
    },
});
