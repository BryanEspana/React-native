import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Globalstyles, colors } from '../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';

export const calculatorScreen = () => {

  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    toggleSing,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();



  return (
    <View style={Globalstyles.ViewBody}>
        <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Text 
            adjustsFontSizeToFit
            numberOfLines={1}
            style={Globalstyles.mainResult}>{formula}</Text>
            <Text 
             adjustsFontSizeToFit
             numberOfLines={1}
            style={Globalstyles.subResult}>
              {(prevNumber === '0')? '' : prevNumber}
              </Text> 
        </View>
        <View style={Globalstyles.row}>
            <CalculatorButton onPress={clean} label="AC" color={colors.lightGray} blackText />
            <CalculatorButton onPress={toggleSing} label="+/-" color={colors.lightGray} blackText />
            <CalculatorButton onPress={deleteOperation} label="del" color={colors.lightGray} blackText />
            <CalculatorButton onPress={divideOperation} label="/" color={colors.orange} />            
            <CalculatorButton onPress={()=> buildNumber('7')} label="7"/>            
            <CalculatorButton onPress={()=> buildNumber('8')} label="8"/>            
            <CalculatorButton onPress={()=> buildNumber('9')} label="9"/>            
            <CalculatorButton onPress={multiplyOperation} label="x" color={colors.orange} />            
            <CalculatorButton onPress={()=> buildNumber('4')} label="4"/>            
            <CalculatorButton onPress={()=> buildNumber('5')} label="5"/>            
            <CalculatorButton onPress={()=> buildNumber('6')} label="6"/>            
            <CalculatorButton onPress={subtractOperation} label="-" color={colors.orange} />           
            <CalculatorButton onPress={()=> buildNumber('1')} label="1"/>            
            <CalculatorButton onPress={()=> buildNumber('2')} label="2"/>            
            <CalculatorButton onPress={()=> buildNumber('3')} label="3"/>            
            <CalculatorButton onPress={addOperation} label="+" color={colors.orange} />   
            <CalculatorButton onPress={()=> buildNumber('0')} label="0" DoubleSize textAlign='center'/>            
            <CalculatorButton onPress={()=> buildNumber('.')} label="."/>            
            <CalculatorButton onPress={calculateResult} label="=" color={colors.orange}  />  
        </View>
    </View>
  )
}


export default calculatorScreen;