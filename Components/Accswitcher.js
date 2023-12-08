import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

export default function Accswitcher() {
    return (
    		<View style={styles.Accswitcher}>
      			<View style={styles.rectangle7}/>
      			<Text style={styles.addAccount}>
        				{`Add Account`}
      			</Text>
      			<Text style={styles.back}>
        				{`Back`}
      			</Text>
<Svg style={styles.icon} width="11" height="18" viewBox="0 0 11 18" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M3.41424 9.00008L10.7071 16.293L9.29292 17.7072L0.585815 9.00008L9.29292 0.292969L10.7071 1.70718L3.41424 9.00008Z" fill="black"/>
</Svg>

      			<View style={styles.rectangle2}/>
<Svg style={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path d="M19.728 17.2913L15.8332 13.3971C15.6574 13.2214 15.4191 13.1237 15.1691 13.1237H14.5323C15.6105 11.7449 16.2512 10.0107 16.2512 8.12421C16.2512 3.63636 12.6142 0 8.12559 0C3.63698 0 0 3.63636 0 8.12421C0 12.612 3.63698 16.2484 8.12559 16.2484C10.0125 16.2484 11.747 15.6079 13.126 14.5298V15.1665C13.126 15.4165 13.2236 15.6547 13.3994 15.8305L17.2942 19.7246C17.6614 20.0918 18.2552 20.0918 18.6185 19.7246L19.7241 18.6193C20.0913 18.2521 20.0913 17.6584 19.728 17.2913ZM8.12559 13.1237C5.36367 13.1237 3.12523 10.8896 3.12523 8.12421C3.12523 5.36276 5.35977 3.12469 8.12559 3.12469C10.8875 3.12469 13.126 5.35885 13.126 8.12421C13.126 10.8857 10.8914 13.1237 8.12559 13.1237Z" fill="#5B5B5B"/>
</Svg>

      			<View style={styles.rectangle13}/>
      			<View style={styles.rectangle14}/>
      			<Text style={styles.mobileMoney}>
        				{`Mobile Money`}
      			</Text>
      			<Text style={styles.bankAccount}>
        				{`Bank Account`}
      			</Text>
<Svg style={styles.ellipse3} width="30" height="30" viewBox="0 0 30 30" fill="none" >
<Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
</Svg>

<Svg style={styles.ellipse4} width="30" height="30" viewBox="0 0 30 30" fill="none" >
<Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
</Svg>

      			<Text style={styles.cancel}>
        				{`Cancel`}
      			</Text>
    		</View>
    )
}

const styles = StyleSheet.create({
  	Accswitcher: {
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
  	addAccount: {
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
  	icon: {
    position: "absolute",
    flexShrink: 0,
    top: 11,
    right: 277,
    bottom: 537,
    left: 10,
    overflow: "visible"
},
  	rectangle2: {
    position: "absolute",
    flexShrink: 0,
    top: 87,
    left: 10,
    width: 268,
    height: 25,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 5
},
  	searchIcon: {
    position: "absolute",
    flexShrink: 0,
    top: 90,
    right: 262,
    bottom: 456,
    left: 15,
    overflow: "visible"
},
  	rectangle13: {
    position: "absolute",
    flexShrink: 0,
    top: 182,
    left: 67,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	rectangle14: {
    position: "absolute",
    flexShrink: 0,
    top: 244,
    left: 67,
    width: 190,
    height: 28,
    backgroundColor: "rgba(217, 217, 217, 1)"
},
  	mobileMoney: {
    position: "absolute",
    flexShrink: 0,
    top: 186,
    left: 73,
    width: 152,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	bankAccount: {
    position: "absolute",
    flexShrink: 0,
    top: 248,
    left: 69,
    width: 152,
    height: 19,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	ellipse3: {
    position: "absolute",
    flexShrink: 0,
    top: 180,
    left: 15,
    width: 30,
    height: 30,
    overflow: "visible"
},
  	ellipse4: {
    position: "absolute",
    flexShrink: 0,
    top: 243,
    left: 15,
    width: 30,
    height: 30,
    overflow: "visible"
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
