import React from 'react';
import {
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CalculatorScreen from './pages/screens/calculatorScreen';
import { Globalstyles } from './pages/config/theme/app-theme';




function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={Globalstyles.background} >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen/>
    </View>
  );
}

export default App;
