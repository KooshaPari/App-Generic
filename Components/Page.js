import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Switch, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
import getColors from '../Colors.js';
import tailwind from 'tailwind-rn';
import MenuBar from './MenuBar.js';
import BackArrow from '../assets/chevron-left.svg';
import Light from '../assets/light.svg';
import Dark from '../assets/dark.svg';

export default function Page({ headerContent, bodyContent, ...props}) {
    const isDarkMode = true; // replace with actual dark mode state
    const Colors = getColors(isDarkMode);
    const styles = StyleSheet.create({
        page: {
            backgroundColor: Colors.primary,
            flex: 1,
            height: '100%',
            width: '100%',
        },
        header: {
            flex: 0.3,
            height: '30%',
            width: '100%',
            backgroundColor: Colors.accent,
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerTXT: {
            fontSize: 48,
            fontFamily: 'Inter',
            color: Colors.primary,
            fontWeight: '600',
        },
        body: {
            flex: 0.75,
        },
        footer: {
            backgroundColor: Colors.secondary,
            height: "10%",
            width: '100%',
            flexDirection:'row',
            //flex: 1,
            //flexShrink: 1,
            marginTop: '5%',
            justifyContent: "center",
            flex:0.1
          },
          bContainer: {
            width: 100,
            height: 100,
            left: '-5%',
            top: '5%',
            position: 'absolute',
            alignSelf: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
            
          },
          hContainer: {
            position: 'absolute',
            bottom: '5%',
            alignSelf: 'center',
          },
    })
    return (
    <View style={styles.page}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.bContainer} onPress={() =>console.print("test")}>
              {isDarkMode ? <BackArrow width={30} height={30}></BackArrow> : <BackArrowL width={30} height={30}/>}
              </TouchableOpacity>
            <Text style={styles.headerTXT}>{props.h_TXT}</Text>
            <View style ={styles.hContainer}>{headerContent}</View>
            </View>
            <View style={styles.body}>
            {bodyContent}
            </View>
            <View style={styles.footer}>
            <MenuBar />
            </View>
        </View>
        )
}