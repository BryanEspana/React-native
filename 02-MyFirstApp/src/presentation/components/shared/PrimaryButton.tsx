/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface Props{
    label: string;
    onPress: () => void;
    onLongPress: () => void;
}

export const PrimaryButton = (
    {label, onPress, onLongPress}: Props
) => {
  return (
    // Boton primario de react native
    <Pressable
    onPress={onPress}
    onLongPress={onLongPress}
    style={({pressed})=>[
      styles.button,
      pressed && styles.buttonPressed,
    ]}>
      <Text style={styles.textColor}>
        {label}
      </Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 80,
      fontWeight: 'bold',
      color: 'black',
    },
    displayrow:{
      flexDirection: 'row',
    },
    button:{
      backgroundColor: '#5856D6',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      color: 'white',
    },
    textColor:{
      color: 'white',
    },
    buttonPressed:{
      backgroundColor: Platform.OS === 'android' ? '#5F23B9' : '#6D33C4',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      color: 'white',
    },
  });
  