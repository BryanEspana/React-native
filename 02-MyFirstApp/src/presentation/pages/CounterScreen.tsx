/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

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
      <View style={styles.displayrow}>
        <Pressable 
        onPress={increment}
        onLongPress={reload}
        style={({pressed})=>[
          styles.button,
          pressed && styles.buttonPressed
        ]}>
          <Text style={styles.textColor}>Incrementar</Text>
        </Pressable>
      </View>
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
    backgroundColor: '#5F23B9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
});
