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
import LightL from '../assets/light light.svg';
import DarkL from '../assets/dark light.svg';
//import { useNavigation } from '@react-navigation/native';
//const Colors = getColors(isDarkMode);
//const isDarkMode = false;

export default function Settings() {
  const [isDarkMode, setTheme] = useState(false);
  const themeToggleSwitch = () =>
  setTheme((previousState) => !previousState);
  const Colors = getColors(isDarkMode);
  const styles = StyleSheet.create({
  	Settings: {
    flex:1,
    flexShrink: 0,
    backgroundColor: Colors.primary,
    alignItems: "flex-start",
    rowGap: 0
},
    appearanceslider: {
      position: 'absolute',
      flex: 1,
      alignSelf: 'flex-end',
      bottom: '5%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bContainer: {
      width: 100,
      height: 100,
      left: '-5%',
      top: '5%',
      position: 'absolute',
      alignSelf: 'flex-start',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 80,
      
    },
    footer: {
      backgroundColor: Colors.secondary,
      height: "12.5%",
      width: '100%',
      flexDirection:'row',
      //flex: 1,
      //flexShrink: 1,
      marginTop: '5%',
      justifyContent: "center",
    },
    header: {
    backgroundColor: Colors.accent,
    width: '100%',
    height: "25%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '5%',
  },
    buttonList:{
    width: '100%',
    height:'100%',
    flex:1,
    flexShrink:1,
  },
  buttonContainer: {
    position: 'relative',
    flexShrink: 1,
    //flex: 1,
    flexDirection: "row",
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: "center",
    width: "90%",
    height: "20%",
    backgroundColor: Colors.secondary,
   alignItems: "center",
   shadowColor: Colors.secondary,
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 2,
   shadowOpacity: 0.7, 
    
},
  	menuText: {
    position: 'relative',
    flexShrink: 0,
    flex: 1,
    flexDirection: "column",
    left: '20%',
    color: Colors.secondaryText,
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0
},
  	settings: {
    //flex:1,
    flexShrink: 0,
    //top: 75,
    flexDirection: "column",
    textAlign: "center",
    color: Colors.primary,
    fontFamily: "Inter",
    fontSize: 48,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    fontWeight: "600",
    letterSpacing: 0
},
  	rectangle2: {
    flex:1,
    flexShrink: 0,
    top: 55,
    left: 8,
    width: 140,
    height: 25,
    backgroundColor: Colors.secondary,
    borderRadius: 5
},
  	searchIcon: {
    
    flex:1,
    flexShrink: 0,
    top: 57,
    right: 261,
    bottom: 489,
    left: 16,
    overflow: "visible"
},
  	search: {
      flex:1,
    
    flexShrink: 0,
    top: 60,
    left: 45,
    width: 37,
    height: 13,
    textAlign: "left",
    color: Colors.primaryText,
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	ellipse3: {
      flex:1,
    
    flexShrink: 0,
    top: 100,
    left: 11,
    width: 30,
    height: 30,
    overflow: "visible"
},
  	businessicon: {
    
    flexShrink: 0,
    top: 100,
    left: 53,
    width: 95,
    height: 21,
    textAlign: "left",
    color:  Colors.primaryText,
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
  	nameofbusinessOwner: {
    
    flexShrink: 0,
    top: 121,
    left: 53,
    width: 154,
    height: 21,
    textAlign: "left",
    color: Colors.secondaryText,
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},

})
    return (
    		<View style={styles.Settings}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.bContainer} onPress={() =>console.print("test")}>
              {isDarkMode ? <BackArrow width={30} height={30}></BackArrow> : <BackArrowL width={30} height={30}/>}
              </TouchableOpacity>
        <Text style={styles.settings}>
        				{`Settings`}
      			</Text>
            <View style={styles.appearanceslider}>
            <Light width={25} height={25} right={'30%'} />
            <Switch 
            trackColor={{ false: Colors.primary, true: Colors.secondary }}
            thumbColor={isDarkMode ? Colors.accent : Colors.primary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={themeToggleSwitch} 
            value={isDarkMode}/>
            <Dark width={22.5} height={22.5} left={'30%'} />
            </View>
        </View>
      			
        <View style={styles.container}>
</View>
            <View style={styles.buttonList}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() =>console.print("test")}>
              <Text style={styles.menuText}>
                  {`Linked Devices`}
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.print("test")}>
              <Text style={styles.menuText}>
                  {`Account`}
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.print("test")}>
              <Text style={styles.menuText}>
                  {`Privacy`}
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.print("test")}>
              <Text style={styles.menuText}>
                  {`Notifications`}
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.print("test")}>
              <Text style={styles.menuText}>
                  {`Downloads`}
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.print("test")}>
              <Text style={styles.menuText}>
                  {`Help`}
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => console.print("test")}>
              <Text style={styles.menuText}>
                  {`Tell A Friend`}
              </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}> 
            <MenuBar />
            </View>
      		</View>
    )
}
//const navigation = useNavigation();




