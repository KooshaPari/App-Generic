import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Components/Splash';
import Accswitcher from './Components/Accswitcher';
import Auth from './Components/Auth';
import Home from './Components/Home';
import Changeinfo from './Components/Changeinfo';
import Link from './Components/Link';
import Loadingscreen from './Components/Loadingscreen';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Transaction from './Components/Transaction';
/*export default function app() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default function App() {
  return <Accswitcher />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
