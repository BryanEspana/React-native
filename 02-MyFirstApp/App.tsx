/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
//import HelloWorldScreen from './src/presentation/pages/HelloWorldScreen';
import CounterScreen from './src/presentation/pages/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name= 'Bryan Carlos España'/> */}
      <CounterScreen/>
    </SafeAreaView>
  );
};
