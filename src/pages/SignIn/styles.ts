import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.colors.background,
    },
    text:{
        width:'100%',
        color:theme.colors.heading,
        fontSize:40,
        textAlign:'center'
    },
    textSubtitle:{
        width:'100%',
        color:theme.colors.heading,
        fontSize:15,
        textAlign:'center',
        marginTop:16,   
    },
    playerFighter:{
        width:'100%',
       resizeMode:'contain',
    },
    imagePlayerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textContainer:{
        flex:1,
        alignItems:'center',
    }
})