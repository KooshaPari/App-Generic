import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function Changeinfo() {
    return (
    		<View style={styles.Changeinfo}>
      			<View style={styles.rectangle7}/>
      			<Text style={styles.changeNumber}>
        				{`Change Number`}
      			</Text>
      			<View style={styles.rectangle13}/>
      			<Text style={styles.requestAccountInfo}>
        				{`Request Account Info`}
      			</Text>
      			<View style={styles.rectangle14}/>
      			<Text style={styles.deleteMyAccount}>
        				{`Delete My Account`}
      			</Text>
      			<View style={styles.rectangle15}/>
      			<Text style={styles.back}>
        				{`Back`}
      			</Text>
      			{/* Vigma RN:: can be replaced with <ArrowsChevronleft  /> */}
      			<View style={styles.arrowsChevronleft}>
<Svg style={styles.icon} width="11" height="18" viewBox="0 0 11 18" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M3.41424 9.00008L10.7071 16.293L9.29292 17.7072L0.585815 9.00008L9.29292 0.292969L10.7071 1.70718L3.41424 9.00008Z" fill="black"/>
</Svg>

      			</View>
      			<View style={styles.rectangle8}/>
      			{/* Vigma RN:: can be replaced with <ChattingCommenttext  /> */}
      			<View style={styles.chattingCommenttext}>
<Svg style={styles._icon} width="26" height="26" viewBox="0 0 26 26" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M5.5 25.2553L13.1085 20.5H23C24.3807 20.5 25.5 19.3807 25.5 18V3C25.5 1.61929 24.3807 0.5 23 0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V18C0.5 19.3807 1.61929 20.5 3 20.5H5.5V25.2553ZM12.3915 18L8 20.7447V18H3V3H23V18H12.3915ZM6.75 14.25V11.75H15.5V14.25H6.75ZM6.75 6.75V9.25H18V6.75H6.75Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <VariousSun  /> */}
      			<View style={styles.variousSun}>
<Svg style={styles.__icon} width="28" height="28" viewBox="0 0 28 28" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M6.40859 21.5913L8.51416 27.2439L14 24.7358L19.4859 27.2439L21.5915 21.5913L27.2441 19.4858L24.7359 13.9999L27.2441 8.51404L21.5915 6.40847L19.4859 0.755859L14 3.264L8.51416 0.755859L6.40859 6.40847L0.755981 8.51404L3.26412 13.9999L0.755981 19.4858L6.40859 21.5913ZM18.0812 23.8528L14 21.9869L9.9188 23.8528L8.35236 19.6476L4.14708 18.0811L6.01302 13.9999L4.14708 9.91868L8.35236 8.35224L9.9188 4.14696L14 6.0129L18.0812 4.14696L19.6477 8.35224L23.853 9.91868L21.987 13.9999L23.853 18.0811L19.6477 19.6476L18.0812 23.8528ZM14 20.2499C10.5482 20.2499 7.75003 17.4517 7.75003 13.9999C7.75003 10.5481 10.5482 7.7499 14 7.7499C17.4518 7.7499 20.25 10.5481 20.25 13.9999C20.25 17.4517 17.4518 20.2499 14 20.2499ZM17.75 13.9999C17.75 16.071 16.0711 17.7499 14 17.7499C11.929 17.7499 10.25 16.071 10.25 13.9999C10.25 11.9288 11.929 10.2499 14 10.2499C16.0711 10.2499 17.75 11.9288 17.75 13.9999Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <BasicUser  /> */}
      			<View style={styles.basicUser}>
<Svg style={styles.___icon} width="28" height="28" viewBox="0 0 28 28" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14 27.75C6.40608 27.75 0.25 21.5939 0.25 14C0.25 6.40608 6.40608 0.25 14 0.25C21.5939 0.25 27.75 6.40608 27.75 14C27.75 21.5939 21.5939 27.75 14 27.75ZM23.2494 20.4058C24.5108 18.5879 25.25 16.3803 25.25 14C25.25 7.7868 20.2132 2.75 14 2.75C7.7868 2.75 2.75 7.7868 2.75 14C2.75 16.3803 3.48923 18.5879 4.75063 20.4058C6.15744 18.5476 9.46325 17.75 14 17.75C18.5367 17.75 21.8426 18.5476 23.2494 20.4058ZM21.4559 22.4247C21.09 21.1092 18.4617 20.25 14 20.25C9.53828 20.25 6.91 21.1092 6.54415 22.4247C8.52913 24.1827 11.1399 25.25 14 25.25C16.8601 25.25 19.4709 24.1827 21.4559 22.4247ZM14 17.75C11.2011 17.75 9 15.7842 9 11.5C9 8.6947 10.9739 6.5 14 6.5C17.0177 6.5 19 8.90197 19 11.75C19 15.8495 16.7726 17.75 14 17.75ZM11.5 11.5C11.5 14.3366 12.5228 15.25 14 15.25C15.4721 15.25 16.5 14.373 16.5 11.75C16.5 10.188 15.5196 9 14 9C12.4172 9 11.5 10.0198 11.5 11.5Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <BasicHome  /> */}
      			<View style={styles.basicHome}>
<Svg style={styles.____icon} width="28" height="26" viewBox="0 0 28 26" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M6.36084 10.5L13.8625 2.99834L21.3642 10.5H21.3625V23H6.36252V10.5H6.36084ZM3.86252 12.9983L2.0165 14.8443L0.25 13.0778L12.0962 1.23161C13.0717 0.256129 14.6533 0.256129 15.6288 1.23161L27.475 13.0778L25.7085 14.8443L23.8625 12.9984V23C23.8625 24.3807 22.7432 25.5 21.3625 25.5H6.36252C4.98181 25.5 3.86252 24.3807 3.86252 23V12.9983Z" fill="black"/>
</Svg>

      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	Changeinfo: {
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
  	changeNumber: {
    position: "absolute",
    flexShrink: 0,
    top: 138,
    left: 11,
    width: 152,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle13: {
    position: "absolute",
    flexShrink: 0,
    top: 157,
    left: 11,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	requestAccountInfo: {
    position: "absolute",
    flexShrink: 0,
    top: 231,
    left: 11,
    width: 152,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle14: {
    position: "absolute",
    flexShrink: 0,
    top: 250,
    left: 11,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	deleteMyAccount: {
    position: "absolute",
    flexShrink: 0,
    top: 343,
    left: 11,
    width: 152,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle15: {
    position: "absolute",
    flexShrink: 0,
    top: 362,
    left: 11,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	back: {
    position: "absolute",
    flexShrink: 0,
    top: 10,
    left: 27,
    width: 35,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	arrowsChevronleft: {
    position: "absolute",
    flexShrink: 0,
    top: 7,
    bottom: 535,
    left: 3,
    right: 270,
    alignItems: "flex-start",
    rowGap: 0
},
  	icon: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 7,
    bottom: 3,
    left: 7,
    overflow: "visible"
},
  	rectangle8: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    width: 297,
    height: 37,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 10
},
  	chattingCommenttext: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 230,
    right: 37,
    alignItems: "flex-start",
    rowGap: 0
},
  	_icon: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    left: 3,
    width: 25,
    height: 25,
    overflow: "visible"
},
  	variousSun: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 167,
    right: 100,
    alignItems: "flex-start",
    rowGap: 0
},
  	__icon: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 26,
    height: 26,
    overflow: "visible"
},
  	basicUser: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 104,
    right: 163,
    alignItems: "flex-start",
    rowGap: 0
},
  	___icon: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 1,
    width: 28,
    height: 28,
    overflow: "visible"
},
  	basicHome: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 41,
    right: 226,
    alignItems: "flex-start",
    rowGap: 0
},
  	____icon: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    left: 1,
    width: 27,
    height: 25,
    overflow: "visible"
}
})
