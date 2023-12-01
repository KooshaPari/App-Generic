import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';
export default function splash() {
    return (
    		<View style={styles.splash}>
      			<View style={styles.rectangle7}/>
      			<Text style={styles.akoma}>
        				{`Akoma`}
      			</Text>
      			<Text style={styles.firstPageloadingpage}>
        				{`First Page (loading page)`}
      			</Text>
      			<ImageBackground style={styles.rectangle17} source={require('./assets/splashico.png')}/>
    		</View>
    )
}

const styles = StyleSheet.create({
  	splash: {
    flexShrink: 0,
    height: 2560,
    width: 1440,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
  	rectangle7: {
    position: "absolute",
    flexShrink: 0,
    width: 2560,
    height: 1440,
    backgroundColor: "rgba(95, 152, 125, 0.6)"
},
  	akoma: {
    position: "absolute",
    flexShrink: 0,
    top: 320,
    left: 94,
    width: 112,
    height: 23,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	firstPageloadingpage: {
    position: "absolute",
    flexShrink: 0,
    top: 13,
    left: 21,
    width: 263,
    height: 24,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle17: {
    position: "absolute",
    flexShrink: 0,
    top: 74,
    left: 39,
    width: 220,
    height: 209
}
})
