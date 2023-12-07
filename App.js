//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme, SafeAreaView } from 'react-native';
//import Splash from './Components/Splash.js';
//import Accswitcher from './Components/Accswitcher.js';
//import Auth from './Components/Auth.js';
//import Home from './Components/Home.js';
//import Changeinfo from './Components/Changeinfo.js';
//import Link from './Components/Link.js';
//import Loadingscreen from './Components/Loadingscreen.js';
//import Login from './Components/Login.js';
//import Profile from './Components/Profile.js';
import Settings from './Components/Settings.js';
import dark from './dark.json';
import light from './light.json';
//import Transaction from './Components/Transaction.js';
import getColors from './Colors.js';
import * as React from 'react';
//import { NavigationContainer} from '@react-navigation/native';
import Support from './Components/Support.js';
import Page from './Components/Page.js';
import { MD3DarkTheme as DTheme, MD3LightTheme as LTheme, Provider as PaperProvider } from 'react-native-paper';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//const isDarkMode = true; // replace with actual dark mode state
//const colors = getColors(isDarkMode);
/*export default function app() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/
//export default function App() {return <Splash />;}
//export default function App() {return <Accswitcher />;}
//export default function App() {return <Auth />;}
//export default function App() {return <Home />;}
//export default function App() {return <Changeinfo />;} // BROKEN
//export default function App() {return <Loadingscreen />;} // BROKEN
//export default function App() {return <Login />;}
//export default function App() {return <Profile />;} // BROKEN


export default function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const theme = 
   colorScheme === 'light' 
   ? { ...DTheme, colors: dark.colors}
   : { ...LTheme, colors: light.colors};
  return (<PaperProvider theme = {theme}><Settings /></PaperProvider>);
}
//export default function App() {return <Transaction />;} // BROKEN
//export default function App() {return <Link />;} // BROKEN
//const Stack = createNativeStackNavigator();

