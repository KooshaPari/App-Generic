import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Components/Splash.js';
import Accswitcher from './Components/Accswitcher.js';
import Auth from './Components/Auth.js';
import Home from './Components/Home.js';
import Changeinfo from './Components/Changeinfo.js';
import Link from './Components/Link.js';
import Loadingscreen from './Components/Loadingscreen.js';
import Login from './Components/Login.js';
import Profile from './Components/Profile.js';
import Settings from './Components/Settings.js';
import Transaction from './Components/Transaction.js';
/*export default function app() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default function App() {
  return <Splash />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
