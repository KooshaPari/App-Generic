import React from 'react';
import { View, Text, ImageBackground, StyleSheet,Image } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
import getColors from '../Colors.js';
const isDarkMode = true; // replace with actual dark mode state
const Colors = getColors(isDarkMode);

export default function splash() {
    return (
    		<View style={styles.splash}>
      			
      			<Text style={styles.firstPageloadingpage}>
        				{`First Page (loading page)`}
      			</Text>
      			<Image style={styles.splashcontainer} source={require('./assets/splashico.png')}/>
            <Text style={styles.akoma}>
        				{`Akoma`}
      			</Text>
      	</View>
    )
}

const styles = StyleSheet.create({
  	splash: {
    flexShrink: 0,
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    rowGap: 0
},
  	akoma: {
    //position: "absolute",
    flex: 1,
    flexShrink: 0,
    top: 30,
    marginTop: 80,
    width: 316,
    height: 23,
    textAlign: "center",
    color: Colors.primaryText,
    fontFamily: "Inter",
    fontSize: 64,
    fontWeight: "600",
    letterSpacing: 0
},
  	firstPageloadingpage: {
    //position: "absolute",
    flexShrink: 0,
    top: 50,
    left: 21,
    width: 263,
    height: 24,
    textAlign: "left",
    color: Colors.primaryText,
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	splashcontainer: {
    //position:"relative",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    marginBottom: 100,
    flexShrink: 10,
    borderRadius: 40,
    top: 150,
    paddingTop: 100,
    alignContent: 'center',
    width: 316,
    height: 300,
    shadowRadius: 3.84,
    shadowColor: '#F00',
    shadowOpacity: 1,
    shadowOffset: { width: 30, height: 30 },
}
})
