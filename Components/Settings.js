import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Card, useTheme, Searchbar } from 'react-native-paper';
import Page from './Page.js';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Settings() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const theme = useTheme();
  const styles = StyleSheet.create({
    buttonList:{
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
   height: '20%',
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
    left: 20,
    //color: Colors.secondaryText,
    //fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 0
},
footertxt: {
  position: 'relative',
  flex: 1,
  flexDirection: 'column',
  //fontFamily: 'Helvetica',
  fontSize: 12,
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
     paddingBottom: '10%',
     alignSelf: 'flex-start',
     elevation: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3.84,
    right:5,
    shadowOpacity: 1,
    //backgroundColor: theme.colors.background,
    },
  bizname: {
    color: theme.colors.primary,
    //fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 'bold',
    left: 5,
    right: -5,
    
  },
  pfp: {
    left: -5,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3.84,
    right:5,
    shadowOpacity: 0.5,
  },
  scrollView: {
    flex: 1,
    //height: '100%',
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
  }
})
  const labels = ['Starred Contacts', 'Linked Devices', 'Account', 'Privacy', 'Notifications', 'Downloads', 'Help', 'Tell A Friend'];  
  const icons = ['star', 'link', 'account', 'shield-lock', 'bell', 'download', 'help-circle', 'share-variant'];
  const bodyContent = (
    <SafeAreaView style={{flex:1, height:'100%'}}>
    <View style= {styles.infocontainer}>
    <Avatar.Icon style={styles.pfp} size={64} icon="folder" />
    <Text style={styles.bizname}>NAME OF BUSINESS</Text>
    </View>
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
  </SafeAreaView>
  );
    return (
       
    		<Page TITLE='Settings'  bodyContent={bodyContent}>
            
      		</Page>
    )
}



