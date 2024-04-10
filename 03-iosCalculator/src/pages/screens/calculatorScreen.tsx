import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Globalstyles, colors } from '../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';

export const calculatorScreen = () => {
  return (
    <View style={Globalstyles.ViewBody}>
        <View style={{paddingHorizontal:20, paddingBottom:20}}>
            <Text style={Globalstyles.mainResult}>1500</Text>
            <Text style={Globalstyles.subResult}>1500</Text> 
        </View>
        <View style={Globalstyles.row}>
            <CalculatorButton onPress={()=> console.log('AC')} label="AC" color={colors.lightGray} blackText />
            <CalculatorButton onPress={()=> console.log('+/-')} label="+/-" color={colors.lightGray} blackText />
            <CalculatorButton onPress={()=> console.log('del')} label="del" color={colors.lightGray} blackText />
            <CalculatorButton onPress={()=> console.log('/')} label="/" color={colors.orange} />            
            <CalculatorButton onPress={()=> console.log('7')} label="7"/>            
            <CalculatorButton onPress={()=> console.log('8')} label="8"/>            
            <CalculatorButton onPress={()=> console.log('9')} label="9"/>            
            <CalculatorButton onPress={()=> console.log('X')} label="X" color={colors.orange} />            
            <CalculatorButton onPress={()=> console.log('4')} label="4"/>            
            <CalculatorButton onPress={()=> console.log('5')} label="5"/>            
            <CalculatorButton onPress={()=> console.log('6')} label="6"/>            
            <CalculatorButton onPress={()=> console.log('-')} label="-" color={colors.orange} />           
            <CalculatorButton onPress={()=> console.log('1')} label="1"/>            
            <CalculatorButton onPress={()=> console.log('2')} label="2"/>            
            <CalculatorButton onPress={()=> console.log('3')} label="3"/>            
            <CalculatorButton onPress={()=> console.log('+')} label="+" color={colors.orange} />   
            <CalculatorButton onPress={()=> console.log('0')} label="0" DoubleSize textAlign='center'/>            
            <CalculatorButton onPress={()=> console.log('.')} label="."/>            
            <CalculatorButton onPress={()=> console.log('=')} label="=" color={colors.orange}  />  
        </View>
    </View>
  )
}


export default calculatorScreen;