import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Switch, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
import getColors from '../Colors.js';
import tailwind from 'tailwind-rn';
import MenuBar from './MenuBar.js';
import BackArrow from '../assets/chevron-left.svg';
import Light from '../assets/light.svg';
import Dark from '../assets/dark.svg';
import BackArrowL from '../assets/chevron-left light.svg';

export default function Support() {
    const isDarkMode = true; // replace with actual dark mode state
    const Colors = getColors(isDarkMode);
    const styles = StyleSheet.create({
        support: {
            backgroundColor: Colors.primary,
            flex: 1,
            height: '100%',
            width: '100%',
        },
        header: {
            flex: 0.2,
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
            flex: 0.65,
        },
        footer: {
            flex: 0.15,

        },
    })
    return (
    <View style={styles.support}>
            <View style={styles.header}>
            <Text style={styles.headerTXT}>Support</Text>
            </View>
            <View style={styles.body}>
            </View>
            <View style={styles.footer}>
            <MenuBar />
            </View>
        </View>
        )
}