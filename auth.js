import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function IPhone1415Pro6() {
    return (
    		<View style={styles.iPhone1415Pro6}>
      			<View style={styles.rectangle7}/>
      			{/* component musicPlayerstop */}
      			<View style={styles.musicPlayerstop}>
<Svg style={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0ZM2 18V2H18V18H2Z" fill="black"/>
</Svg>

      			</View>
      			<Text style={styles.enterVerificationNumber}>
        				{`Enter Verification Number`}
      			</Text>
      			<View style={styles.rectangle9}/>
      			<Text style={styles.signIn}>
        				{`Sign In`}
      			</Text>
      			<Text style={styles.staysignedin}>
        				{`Stay signed in`}
      			</Text>
      			<Text style={styles.useAnotherAccount}>
        				{`Use Another Account?`}
      			</Text>
      			<Text style={styles.cancel}>
        				{`Cancel`}
      			</Text>
    		</View>
    )
}

const styles = StyleSheet.create({
  	iPhone1415Pro6: {
    flexShrink: 0,
    height: 566,
    width: 297,
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
  	musicPlayerstop: {
    position: "absolute",
    flexShrink: 0,
    top: 222,
    bottom: 320,
    left: 25,
    right: 248,
    alignItems: "flex-start",
    rowGap: 0
},
  	icon: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    overflow: "visible"
},
  	enterVerificationNumber: {
    position: "absolute",
    flexShrink: 0,
    top: 162,
    left: 25,
    width: 168,
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
    top: 181,
    left: 25,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	signIn: {
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
},
  	staysignedin: {
    position: "absolute",
    flexShrink: 0,
    top: 225,
    left: 49,
    width: 168,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	useAnotherAccount: {
    position: "absolute",
    flexShrink: 0,
    top: 264,
    left: 27,
    width: 168,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	cancel: {
    position: "absolute",
    flexShrink: 0,
    top: 445,
    right: 52,
    left: 55,
    height: 22,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0
}
})
