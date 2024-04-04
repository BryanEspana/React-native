/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line quotes
import { StyleSheet, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
    centerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'black',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 10 : 0,
      },
});