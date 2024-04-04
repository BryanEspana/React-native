/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const CounterM3Screen = () => {
  
  //useState count
  const [count, setCount] = React.useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>
        {count}
      </Text>
      <FAB
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        icon="add-outline"      />
    </View>
  );
};

export default CounterM3Screen;
