import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Switch, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Searchbar } from 'react-native-paper';
import Page from './Page.js';

export default function Settings() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const styles = StyleSheet.create({
    buttonList:{
    top: '5%',
    bottom: '5%',
    width: '100%',
    height:'100%',
    //flex:0.99,
    flexShrink:1,
    elevation: 5,
    alignItems: 'center', 
  },
  buttonContainer: {
   rippleWidth: '100%',
   width: '80%',
   height: '10%',
   alignSelf: 'center',
   alignItems: 'flex-start',
   justifyContent: 'center',
   marginTop: '1.25%',
   marginBottom: '1.25%',
},
  	menuText: {
    position: 'relative',
    flexShrink: 0,
    flex: 1,
    flexDirection: "column",
    left: '20%',
    //color: Colors.secondaryText,
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0
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
   // color: Colors.primaryText,
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	businessicon: {
    
    flexShrink: 0,
    top: 100,
    left: 53,
    width: 95,
    height: 21,
    textAlign: "left",
    //color:  Colors.primaryText,
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
    //color: Colors.secondaryText,
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0
},
footertxt: {
  position: 'relative',
  flex: 1,
  flexDirection: 'column',
  fontFamily: 'Helvetica',
  fontSize: '12',
  alignSelf: 'center',
  justifyContent: 'flex-end',
},
  infocontainer: {
    flexDirection: 'row',
     width: '100%',
     height: '10%',
     alignItems: 'center', 
     justifyContent: 'center', 
     top: '5%', 
     bottom: '5%',
     alignSelf: 'flex-start'
    },
  bizname: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    left: '7.5%',
    right: '-7.5%',
  },
  pfp: {
    left: '-7.5%',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3.84,
    right:'7.5%',
    shadowOpacity: 0.5,
  },
})
  const labels = ['Starred Contacts', 'Linked Devices', 'Account', 'Privacy', 'Notifications', 'Downloads', 'Help', 'Tell A Friend'];  
  const icons = ['star', 'link', 'account', 'shield-lock', 'bell', 'download', 'help-circle', 'share-variant'];
  const bodyContent = (
    <View>
    <View style= {styles.infocontainer}>
    <Avatar.Icon style={styles.pfp} size={64} icon="folder" />
    <Text style={styles.bizname}>NAME OF BUSINESS</Text>
    </View>
      <View style={styles.buttonList}>
        {labels.map((label, index) => (
        <Button 
          key={index}
          icon={icons[index]} 
          mode="elevated" 
          style={styles.buttonContainer} 
          onPress={() => console.log('Pressed')}>
          <Text style={styles.menuText}>{label}</Text>
        </Button>
      ))}
      <Text style={styles.footertxt}>Version 1.0.0</Text>
    </View>
  </View>
  );
    return (
       
    		<Page TITLE='Settings'  bodyContent={bodyContent}>
            
      		</Page>
    )
}



