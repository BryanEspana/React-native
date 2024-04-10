import { StyleSheet } from "react-native";


export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9427',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000'
}

export const Globalstyles  = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: colors.background
    },
    ViewBody:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    mainResult:{
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '400'
    },
    subResult:{
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },
    button:{
        height: 90,
        width: 90,
        backgroundColor: colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        margin: 10
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '400',
        color: colors.textPrimary
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 10,
    }
});