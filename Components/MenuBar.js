import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
import getColors from '../Colors.js';
import tailwind from 'tailwind-rn';
import Home from '../assets/home.svg';
import Settings from '../assets/sun.svg';
import User from '../assets/user.svg';
import HomeL from '../assets/home light.svg';
import SettingsL from '../assets/sun light.svg';
import UserL from '../assets/user light.svg';
const isDarkMode = true; // replace with actual dark mode state
const Colors = getColors(isDarkMode);

export default function menuBar(){
    return(
        <View style={styles.menuBar}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() =>console.print("test")}>
  <Home width={40} height={40} />
</TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() =>console.print("test")}>
  <User width={40} height={40} />
</TouchableOpacity>
<TouchableOpacity style={styles.buttonContainer} onPress={() =>console.print("test")}>
  <Settings width={40} height={40} />
</TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    imgcontainer: {
        flex:1,

    },
    menuBar: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        marginRight:'5%',
        borderRadius:40,
        left:'2.5%',
        bottom: '2.5%',
        marginBottom: '5%',
        top: '2.5%',
        right: '2.5%',
        backgroundColor: Colors.accent,
    },
    });