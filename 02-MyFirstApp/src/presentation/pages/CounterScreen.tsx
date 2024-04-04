/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

const CounterScreen = () => {
  
  //useState count
  const [count, setCount] = React.useState(10);

  //function to increment count
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reload = () => {
    setCount(0);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {count}
      </Text>
      <View style={styles.displayrow} />
      {/*      <PrimaryButton label="Incrementar" onPress={increment} onLongPress={reload}/> */}
      <Button
        mode="contained"
        onPress={increment}
        onLongPress={reload}
      >
        Incrementar
        </Button>
    </View>
  );
};

export default CounterScreen;

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
