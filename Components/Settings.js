import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { Svg, Path, Circle } from 'react-native-svg';

export default function Settings() {
    return (
    		<View style={styles.Settings}>
      			<View style={styles.rectangle7}/>
      			<Text style={styles.settings}>
        				{`Settings`}
      			</Text>
      			<View style={styles.rectangle2}/>
<Svg style={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path d="M19.728 17.2913L15.8332 13.3971C15.6574 13.2214 15.4191 13.1237 15.1691 13.1237H14.5323C15.6105 11.7449 16.2512 10.0107 16.2512 8.12421C16.2512 3.63636 12.6142 0 8.12559 0C3.63698 0 0 3.63636 0 8.12421C0 12.612 3.63698 16.2484 8.12559 16.2484C10.0125 16.2484 11.747 15.6079 13.126 14.5298V15.1665C13.126 15.4165 13.2236 15.6547 13.3994 15.8305L17.2942 19.7246C17.6614 20.0918 18.2552 20.0918 18.6185 19.7246L19.7241 18.6193C20.0913 18.2521 20.0913 17.6584 19.728 17.2913ZM8.12559 13.1237C5.36367 13.1237 3.12523 10.8896 3.12523 8.12421C3.12523 5.36276 5.35977 3.12469 8.12559 3.12469C10.8875 3.12469 13.126 5.35885 13.126 8.12421C13.126 10.8857 10.8914 13.1237 8.12559 13.1237Z" fill="#5B5B5B"/>
</Svg>

      			<Text style={styles.search}>
        				{`Search `}
      			</Text>
<Svg style={styles.ellipse3} width="30" height="30" viewBox="0 0 30 30" fill="none" >
<Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
</Svg>

      			<Text style={styles.businessicon}>
        				{`Business icon`}
      			</Text>
      			<Text style={styles.nameofbusinessOwner}>
        				{`Name of business /owner`}
      			</Text>
      			<View style={styles.rectangle14}/>
      			<Text style={styles.starredContacts}>
        				{`Starred Contacts`}
      			</Text>
      			<View style={styles.rectangle15}/>
      			<Text style={styles.linkedDevices}>
        				{`Linked Devices`}
      			</Text>
      			<View style={styles.rectangle16}/>
      			<Text style={styles.account}>
        				{`Account`}
      			</Text>
      			<View style={styles.rectangle17}/>
      			<Text style={styles.privacy}>
        				{`Privacy`}
      			</Text>
      			<View style={styles.rectangle18}/>
      			<Text style={styles.notifications}>
        				{`Notifications`}
      			</Text>
      			<View style={styles.rectangle20}/>
      			<Text style={styles.downloads}>
        				{`Downloads`}
      			</Text>
      			<View style={styles.rectangle21}/>
      			<Text style={styles.help}>
        				{`Help`}
      			</Text>
      			<View style={styles.rectangle22}/>
      			<Text style={styles.tellaFriend}>
        				{`Tell a Friend`}
      			</Text>
      			<View style={styles.rectangle8}/>
      			{/* Vigma RN:: can be replaced with <ChattingCommenttext  /> */}
      			<View style={styles.chattingCommenttext}>
<Svg style={styles.icon} width="26" height="26" viewBox="0 0 26 26" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M5.5 25.2553L13.1085 20.5H23C24.3807 20.5 25.5 19.3807 25.5 18V3C25.5 1.61929 24.3807 0.5 23 0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V18C0.5 19.3807 1.61929 20.5 3 20.5H5.5V25.2553ZM12.3915 18L8 20.7447V18H3V3H23V18H12.3915ZM6.75 14.25V11.75H15.5V14.25H6.75ZM6.75 6.75V9.25H18V6.75H6.75Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <VariousSun  /> */}
      			<View style={styles.variousSun}>
<Svg style={styles._icon} width="28" height="28" viewBox="0 0 28 28" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M6.40859 21.5913L8.51416 27.2439L14 24.7358L19.4859 27.2439L21.5915 21.5913L27.2441 19.4858L24.7359 13.9999L27.2441 8.51404L21.5915 6.40847L19.4859 0.755859L14 3.264L8.51416 0.755859L6.40859 6.40847L0.755981 8.51404L3.26412 13.9999L0.755981 19.4858L6.40859 21.5913ZM18.0812 23.8528L14 21.9869L9.9188 23.8528L8.35236 19.6476L4.14708 18.0811L6.01302 13.9999L4.14708 9.91868L8.35236 8.35224L9.9188 4.14696L14 6.0129L18.0812 4.14696L19.6477 8.35224L23.853 9.91868L21.987 13.9999L23.853 18.0811L19.6477 19.6476L18.0812 23.8528ZM14 20.2499C10.5482 20.2499 7.75003 17.4517 7.75003 13.9999C7.75003 10.5481 10.5482 7.7499 14 7.7499C17.4518 7.7499 20.25 10.5481 20.25 13.9999C20.25 17.4517 17.4518 20.2499 14 20.2499ZM17.75 13.9999C17.75 16.071 16.0711 17.7499 14 17.7499C11.929 17.7499 10.25 16.071 10.25 13.9999C10.25 11.9288 11.929 10.2499 14 10.2499C16.0711 10.2499 17.75 11.9288 17.75 13.9999Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <BasicUser  /> */}
      			<View style={styles.basicUser}>
<Svg style={styles.__icon} width="28" height="28" viewBox="0 0 28 28" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14 27.75C6.40608 27.75 0.25 21.5939 0.25 14C0.25 6.40608 6.40608 0.25 14 0.25C21.5939 0.25 27.75 6.40608 27.75 14C27.75 21.5939 21.5939 27.75 14 27.75ZM23.2494 20.4058C24.5108 18.5879 25.25 16.3803 25.25 14C25.25 7.7868 20.2132 2.75 14 2.75C7.7868 2.75 2.75 7.7868 2.75 14C2.75 16.3803 3.48923 18.5879 4.75063 20.4058C6.15744 18.5476 9.46325 17.75 14 17.75C18.5367 17.75 21.8426 18.5476 23.2494 20.4058ZM21.4559 22.4247C21.09 21.1092 18.4617 20.25 14 20.25C9.53828 20.25 6.91 21.1092 6.54415 22.4247C8.52913 24.1827 11.1399 25.25 14 25.25C16.8601 25.25 19.4709 24.1827 21.4559 22.4247ZM14 17.75C11.2011 17.75 9 15.7842 9 11.5C9 8.6947 10.9739 6.5 14 6.5C17.0177 6.5 19 8.90197 19 11.75C19 15.8495 16.7726 17.75 14 17.75ZM11.5 11.5C11.5 14.3366 12.5228 15.25 14 15.25C15.4721 15.25 16.5 14.373 16.5 11.75C16.5 10.188 15.5196 9 14 9C12.4172 9 11.5 10.0198 11.5 11.5Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <BasicHome  /> */}
      			<View style={styles.basicHome}>
<Svg style={styles.___icon} width="28" height="26" viewBox="0 0 28 26" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M6.36084 10.5L13.8625 2.99834L21.3642 10.5H21.3625V23H6.36252V10.5H6.36084ZM3.86252 12.9983L2.0165 14.8443L0.25 13.0778L12.0962 1.23161C13.0717 0.256129 14.6533 0.256129 15.6288 1.23161L27.475 13.0778L25.7085 14.8443L23.8625 12.9984V23C23.8625 24.3807 22.7432 25.5 21.3625 25.5H6.36252C4.98181 25.5 3.86252 24.3807 3.86252 23V12.9983Z" fill="black"/>
</Svg>

      			</View>
      			<Text style={styles.back}>
        				{`Back`}
      			</Text>
      			{/* Vigma RN:: can be replaced with <ArrowsChevronleft  /> */}
      			<View style={styles.arrowsChevronleft}>
<Svg style={styles.____icon} width="11" height="18" viewBox="0 0 11 18" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M3.41424 8.99995L10.7071 16.2928L9.29292 17.7071L0.585815 8.99995L9.29292 0.292847L10.7071 1.70706L3.41424 8.99995Z" fill="black"/>
</Svg>

      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	Settings: {
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
  	settings: {
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
  	rectangle2: {
    position: "absolute",
    flexShrink: 0,
    top: 55,
    left: 8,
    width: 140,
    height: 25,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 5
},
  	searchIcon: {
    position: "absolute",
    flexShrink: 0,
    top: 57,
    right: 261,
    bottom: 489,
    left: 16,
    overflow: "visible"
},
  	search: {
    position: "absolute",
    flexShrink: 0,
    top: 60,
    left: 45,
    width: 37,
    height: 13,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	ellipse3: {
    position: "absolute",
    flexShrink: 0,
    top: 100,
    left: 11,
    width: 30,
    height: 30,
    overflow: "visible"
},
  	businessicon: {
    position: "absolute",
    flexShrink: 0,
    top: 100,
    left: 53,
    width: 95,
    height: 21,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	nameofbusinessOwner: {
    position: "absolute",
    flexShrink: 0,
    top: 121,
    left: 53,
    width: 154,
    height: 21,
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
    top: 169,
    left: 35,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	starredContacts: {
    position: "absolute",
    flexShrink: 0,
    top: 175,
    left: 40,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle15: {
    position: "absolute",
    flexShrink: 0,
    top: 215,
    left: 36,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	linkedDevices: {
    position: "absolute",
    flexShrink: 0,
    top: 221,
    left: 41,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle16: {
    position: "absolute",
    flexShrink: 0,
    top: 261,
    left: 35,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	account: {
    position: "absolute",
    flexShrink: 0,
    top: 267,
    left: 40,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle17: {
    position: "absolute",
    flexShrink: 0,
    top: 307,
    left: 35,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	privacy: {
    position: "absolute",
    flexShrink: 0,
    top: 313,
    left: 40,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle18: {
    position: "absolute",
    flexShrink: 0,
    top: 353,
    left: 35,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	notifications: {
    position: "absolute",
    flexShrink: 0,
    top: 360,
    left: 39,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle20: {
    position: "absolute",
    flexShrink: 0,
    top: 400,
    left: 35,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	downloads: {
    position: "absolute",
    flexShrink: 0,
    top: 407,
    left: 40,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle21: {
    position: "absolute",
    flexShrink: 0,
    top: 447,
    left: 33,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	help: {
    position: "absolute",
    flexShrink: 0,
    top: 454,
    left: 38,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle22: {
    position: "absolute",
    flexShrink: 0,
    top: 494,
    left: 33,
    width: 162,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	tellaFriend: {
    position: "absolute",
    flexShrink: 0,
    top: 501,
    left: 38,
    width: 147,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
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
  	icon: {
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
  	_icon: {
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
  	__icon: {
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
  	___icon: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    left: 1,
    width: 27,
    height: 25,
    overflow: "visible"
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
    top: 8,
    bottom: 534,
    left: 3,
    right: 270,
    alignItems: "flex-start",
    rowGap: 0
},
  	____icon: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    right: 7,
    bottom: 3,
    left: 7,
    overflow: "visible"
}
})
