import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Avatar, Button, useTheme } from 'react-native-paper';
import Page from './Page.js';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();
  const theme = useTheme();

  const BUTTON_RADIUS = 12;

  const styles = StyleSheet.create({
    buttonList: {
      width: '100%',
      flexShrink: 1,
      alignItems: 'center',
    },
    // Clip wrapper ensures the ripple stays inside the button boundary. Fixes #8.
    buttonClipWrapper: {
      width: '80%',
      borderRadius: BUTTON_RADIUS,
      overflow: 'hidden',
      marginTop: '1.25%',
      marginBottom: '1.25%',
      elevation: 3,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 3,
      shadowOpacity: 0.15,
    },
    buttonContainer: {
      width: '100%',
      borderRadius: BUTTON_RADIUS,
    },
    buttonContentStyle: {
      height: 60,
      justifyContent: 'flex-start',
      paddingLeft: 8,
    },
    buttonLabelStyle: {
      fontSize: 16,
      fontWeight: '400',
      letterSpacing: 0.1,
    },
    footertxt: {
      fontSize: 12,
      alignSelf: 'center',
      marginTop: 8,
      marginBottom: 8,
      color: theme.colors.onSurfaceVariant,
    },
    infocontainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5%',
      paddingBottom: '5%',
      paddingHorizontal: 16,
    },
    bizname: {
      color: theme.colors.primary,
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 12,
      flexShrink: 1,
    },
    pfp: {
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.3,
    },
    scrollView: {
      width: '100%',
      paddingTop: '2%',
    },
  });

  // Issue #7: Each screen now carries a contextual label and icon.
  // The label is the human-readable name shown on the button.
  // The icon is a Material Community Icons name that represents the section.
  const screens = [
    { name: 'Starred Contacts', icon: 'star', label: 'Starred Contacts' },
    { name: 'Linked Devices',   icon: 'cellphone-link', label: 'Linked Devices' },
    { name: 'Account',          icon: 'account-circle', label: 'Account' },
    { name: 'Privacy',          icon: 'shield-lock', label: 'Privacy' },
    { name: 'Notifications',    icon: 'bell', label: 'Notifications' },
    { name: 'Downloads',        icon: 'download-circle', label: 'Downloads' },
    { name: 'Help',             icon: 'help-circle', label: 'Help & Support' },
    { name: 'Tell A Friend',    icon: 'share-variant', label: 'Tell A Friend' },
  ];

  const bodyContent = (
    <View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.infocontainer}>
          <Avatar.Icon style={styles.pfp} size={64} icon="account-circle" />
          <Text style={styles.bizname}>NAME OF BUSINESS</Text>
        </View>

        <View style={styles.buttonList}>
          {screens.map((screen, index) => (
            // Issue #8 fix: overflow:hidden clip wrapper constrains the ripple to the
            // button's visible bounds. The wrapper and button share the same borderRadius.
            <View key={index} style={styles.buttonClipWrapper}>
              <Button
                icon={screen.icon}
                mode="elevated"
                style={styles.buttonContainer}
                contentStyle={styles.buttonContentStyle}
                labelStyle={styles.buttonLabelStyle}
                onPress={() =>
                  navigation.navigate('SettingsTab', { screen: screen.name })
                }
              >
                {screen.label}
              </Button>
            </View>
          ))}
          <Text style={styles.footertxt}>Version 1.0.0</Text>
        </View>
        <View style={{ height: 120, width: '100%' }} />
      </ScrollView>
    </View>
  );

  return (
    <Page TITLE="Settings" bodyContent={bodyContent} navigation={navigation} useNav={true} useSearch={true} />
  );
}
