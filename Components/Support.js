import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Switch, TouchableOpacity } from 'react-native';
//import { Svg, Path, Circle } from 'react-native-svg';
//import getColors from '../Colors.js';
//import MenuBar from './MenuBar.js';
//import BackArrow from '../assets/chevron-left.svg';
//import Light from '../assets/light.svg';
//import Dark from '../assets/dark.svg';
//import BackArrowL from '../assets/chevron-left light.svg';
//import Page from './Page.js'

export default function Support() {
    //const isDarkMode = true; // replace with actual dark mode state
    //const Colors = getColors(isDarkMode);
    const styles = StyleSheet.create({
        container: {height: '100%', width: '100%', backgroundColor: '#f0f', alignItems: 'center', justifyContent: 'center'},
    });
    return (
        <View style={styles.container}></View>
        )
}