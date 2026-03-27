import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Searchbar, List, Divider, useTheme, Icon, ActivityIndicator } from 'react-native-paper';
import Page from './Page.js';
import { useNavigation } from '@react-navigation/native';

// All navigable screens that can be surfaced through search.
// Extend this list as the app grows.
const ALL_ITEMS = [
  { name: 'Starred Contacts', icon: 'star', screen: 'Starred Contacts', tab: 'SettingsTab', description: 'View and manage starred contacts' },
  { name: 'Linked Devices',   icon: 'cellphone-link', screen: 'Linked Devices', tab: 'SettingsTab', description: 'Manage devices linked to your account' },
  { name: 'Account',          icon: 'account-circle', screen: 'Account', tab: 'SettingsTab', description: 'Edit your account details' },
  { name: 'Privacy',          icon: 'shield-lock', screen: 'Privacy', tab: 'SettingsTab', description: 'Privacy and visibility settings' },
  { name: 'Notifications',    icon: 'bell', screen: 'Notifications', tab: 'SettingsTab', description: 'Configure push notification preferences' },
  { name: 'Downloads',        icon: 'download-circle', screen: 'Downloads', tab: 'SettingsTab', description: 'Manage downloads and offline content' },
  { name: 'Help',             icon: 'help-circle', screen: 'Help', tab: 'SettingsTab', description: 'Get help and submit support tickets' },
  { name: 'Tell A Friend',    icon: 'share-variant', screen: 'Tell A Friend', tab: 'SettingsTab', description: 'Share the app with friends' },
  { name: 'Home',             icon: 'home', screen: 'Home', tab: 'HomeTab', description: 'Go to the home screen' },
  { name: 'Profile',          icon: 'account', screen: 'Home', tab: 'ProfileTab', description: 'View your profile' },
];

function SearchResultItem({ item, onPress }) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 14,
      backgroundColor: theme.colors.surface,
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.secondaryContainer,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 14,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.colors.onSurface,
    },
    description: {
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
      marginTop: 2,
    },
    chevron: {
      marginLeft: 8,
    },
  });

  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Icon source={item.icon} size={20} color={theme.colors.onSecondaryContainer} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Icon source="chevron-right" size={20} color={theme.colors.onSurfaceVariant} />
    </TouchableOpacity>
  );
}

function EmptyState({ query, theme }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '20%',
    },
    iconWrapper: {
      marginBottom: 16,
      opacity: 0.4,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.onSurface,
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 14,
      color: theme.colors.onSurfaceVariant,
      textAlign: 'center',
      paddingHorizontal: 40,
    },
  });

  if (!query) {
    return (
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <Icon source="magnify" size={64} color={theme.colors.onSurface} />
        </View>
        <Text style={styles.title}>Search the app</Text>
        <Text style={styles.subtitle}>Find settings, features, and content quickly</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon source="magnify-close" size={64} color={theme.colors.onSurface} />
      </View>
      <Text style={styles.title}>No results for "{query}"</Text>
      <Text style={styles.subtitle}>Try a different search term or browse the settings menu</Text>
    </View>
  );
}

export default function Search() {
  const [query, setQuery] = useState('');
  const navigation = useNavigation();
  const theme = useTheme();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_ITEMS.filter(
      item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [query]);

  const styles = StyleSheet.create({
    searchbarWrapper: {
      paddingHorizontal: 12,
      paddingVertical: 10,
      backgroundColor: theme.colors.background,
    },
    searchbar: {
      borderRadius: 28,
      backgroundColor: theme.colors.surfaceVariant,
      elevation: 0,
    },
    resultCount: {
      paddingHorizontal: 16,
      paddingBottom: 6,
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
    },
    list: {
      flex: 1,
    },
    separator: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant,
      marginLeft: 70,
    },
  });

  const handleNavigate = item => {
    navigation.navigate(item.tab, { screen: item.screen });
  };

  const bodyContent = (
    <View style={{ flex: 1 }}>
      <View style={styles.searchbarWrapper}>
        <Searchbar
          placeholder="Search settings and features…"
          onChangeText={setQuery}
          value={query}
          style={styles.searchbar}
          inputStyle={{ fontSize: 15 }}
          autoFocus
          clearButtonMode="while-editing"
        />
      </View>

      {query.trim().length > 0 && results.length > 0 && (
        <Text style={styles.resultCount}>
          {results.length} result{results.length !== 1 ? 's' : ''}
        </Text>
      )}

      {results.length > 0 ? (
        <FlatList
          style={styles.list}
          data={results}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <SearchResultItem item={item} onPress={() => handleNavigate(item)} />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyboardShouldPersistTaps="handled"
        />
      ) : (
        <EmptyState query={query.trim()} theme={theme} />
      )}
    </View>
  );

  return (
    <Page TITLE="Search" bodyContent={bodyContent} navigation={navigation} useNav={false} useSearch={false} />
  );
}
