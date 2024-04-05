/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
//import HelloWorldScreen from './src/presentation/pages/HelloWorldScreen';
//import CounterScreen from './src/presentation/pages/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { DimensionScreen, HomeworkScreen } from './src/presentation/pages';
import IonIcon  from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) =><IonIcon {...props}/>,
      }}
    >
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name= 'Bryan Carlos España'/> */}
        {/*<CounterScreen/>*/}
        {/*<CounterM3Screen/>*/}
        {/*<DimensionScreen/>*/}
        <HomeworkScreen/>
      </SafeAreaView>
    </PaperProvider>
  );
};
