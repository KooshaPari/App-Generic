import React, { useState } from 'react';
import { StyleSheet, View, Platform, Image, Switch, TouchableOpacity } from 'react-native';
import { useTheme, Appbar, BottomNavigation, Text,} from 'react-native-paper';

function Page({ Navigation, headerContent, bodyContent, useSearch, useNav, ...props})  {
  const theme = useTheme();
  const styles = StyleSheet.create({
    page: {
      width:'100%',
      height: '100%',
      backgroundColor: theme.colors.primary,
    },
    header: {
      backgroundColor: '#00F',
      width: '100%',
      height: '0%',
    },
    body: {
      flex:1,
      backgroundColor: theme.colors.background,
      width: '100%',
     // height: '77%',
    },
    fjoter: {
     //flex: 1,
      backgroundColor: '#ff0',
      alignSelf: 'flex-end',
      width: '100%',
      height: '0%',
    },
    search: {
      width: '100%',
      height: '100%',
    },
  });
  

  return (
    <View style={styles.page}>
      <View style={styles.header}>
</View>
      <View style={styles.body}>
        {bodyContent}
      </View>
     </View>
    
  );
};

export default Page;