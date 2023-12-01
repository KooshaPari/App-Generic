import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  } from 'react-native-svg';

export default function IPhone1415Pro5() {
    return (
    		<View style={styles.iPhone1415Pro5}>
      			<View style={styles.rectangle7}/>
      			<Text style={styles.cancel}>
        				{`Cancel`}
      			</Text>
      			<Text style={styles.popUpAfterSignupAllowAkomatotrackyourlocationYesNo}>
        				{`Pop Up After Sign up “ Allow Akoma to track your location (Yes/No)”`}
      			</Text>
      			<Text style={styles.firstName}>
        				{`First Name`}
      			</Text>
      			<View style={styles.rectangle10}/>
      			<Text style={styles.lastName}>
        				{`Last Name`}
      			</Text>
      			<View style={styles.rectangle11}/>
      			<Text style={styles.number}>
        				{`Number`}
      			</Text>
      			<View style={styles.rectangle9}/>
      			<Text style={styles.signUp}>
        				{`Sign Up`}
      			</Text>
    		</View>
    )
}

const styles = StyleSheet.create({
  	iPhone1415Pro5: {
    flexShrink: 0,
    height: 566,
    width: 299,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
  	rectangle7: {
    position: "absolute",
    flexShrink: 0,
    width: 297,
    height: 566,
    backgroundColor: "rgba(95, 152, 125, 0.6)"
},
  	cancel: {
    position: "absolute",
    flexShrink: 0,
    top: 445,
    right: 54,
    left: 55,
    height: 22,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0
},
  	popUpAfterSignupAllowAkomatotrackyourlocationYesNo: {
    position: "absolute",
    flexShrink: 0,
    top: 338,
    left: 23,
    width: 254,
    height: 42,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0
},
  	firstName: {
    position: "absolute",
    flexShrink: 0,
    top: 153,
    left: 13,
    width: 112,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle10: {
    position: "absolute",
    flexShrink: 0,
    top: 169,
    left: 13,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	lastName: {
    position: "absolute",
    flexShrink: 0,
    top: 222,
    left: 13,
    width: 112,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle11: {
    position: "absolute",
    flexShrink: 0,
    top: 241,
    left: 13,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	number: {
    position: "absolute",
    flexShrink: 0,
    top: 78,
    left: 13,
    width: 112,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle9: {
    position: "absolute",
    flexShrink: 0,
    top: 97,
    left: 13,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	signUp: {
    position: "absolute",
    flexShrink: 0,
    top: 13,
    left: 21,
    width: 263,
    height: 24,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
}
})
