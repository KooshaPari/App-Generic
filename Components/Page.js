import React, { useState } from 'react';
import { StyleSheet, View, Platform, Image, Switch, TouchableOpacity } from 'react-native';
import { useTheme, Appbar, BottomNavigation, Text, ThemeProvider } from 'react-native-paper';

const HomeRoute = () => null;

const AccountRoute = () => null;

const SettingsRoute = () => null;

const NotificationsRoute = () => null;

const backRoute = () => null;


function Page({ headerContent, bodyContent, useSearch, useNav, ...props})  {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'account', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog' , unfocusedIcon: 'cog-outline'},
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  const navBar= BottomNavigation.SceneMap({
    home: HomeRoute,
    account: AccountRoute,
    settings: SettingsRoute,
    notifications: NotificationsRoute,
  });
  const styles = StyleSheet.create({
    page: {
      width:'100%',
      height: '100%',
      backgroundColor: theme.colors.primary,
    },
    header: {
      backgroundColor: '#00F',
      width: '100%',
      height: '13%',
    },
    body: {
      flex:1,
      backgroundColor: theme.colors.background,
      width: '100%',
     // height: '77%',
    },
    footer: {
     //flex: 1,
      backgroundColor: '#ff0',
      alignSelf: 'flex-end',
      width: '100%',
      height: '10%',
    },
    search: {
      width: '100%',
      height: '100%',
    },
  });
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Appbar.Header style={{height: '100%'}}>
          <Appbar.BackAction onPress={() => { } } />
          <Appbar.Content title={props.TITLE} />
          {useSearch && <Appbar.Action icon="magnify" onPress={() => setIsSearchVisible(true)} />}
        </Appbar.Header></View>
      <View style={styles.body}>
        {bodyContent}
      </View>
      {useNav && <View style={styles.footer}>
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={navBar} />
      </View>}
     </View>
    
  );
};

export default Page;