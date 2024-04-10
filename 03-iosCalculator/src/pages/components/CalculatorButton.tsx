import React from 'react'
import { FlexAlignType, Pressable, Text } from 'react-native';
import { Globalstyles, colors } from '../config/theme/app-theme';


interface Props{
    label: string;
    color?: string;
    blackText?: boolean;
    DoubleSize?: boolean;
    textAlign?: FlexAlignType
    onPress: () => void;
}



export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    blackText = false,
    DoubleSize = false,
    textAlign = 'center',
    onPress,
}:Props) => {
  return (
    <Pressable
    onPress={()=> onPress()}
    style={({pressed})=>({
        ...Globalstyles.button,
        opacity: pressed ? 0.5 : 1,
        backgroundColor: color,
        width: (DoubleSize) ? 200 : 90,
        alignItems: textAlign

    })}>
        <Text style={
           ({
            ...Globalstyles.buttonText,
            color: (blackText) ? 'black' : 'white'
           })
        }>{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton;