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

const dark = {
  ...DTheme,
  dark: true,
  roundness: 40,
  mode: 'adaptive',
  version: 3,
  fontFamily: 'Helvetica',
    "colors": {
      "primary": "rgb(79, 218, 210)",
      "onPrimary": "rgb(0, 55, 52)",
      "primaryContainer": "rgb(0, 80, 76)",
      "onPrimaryContainer": "rgb(112, 247, 238)",
      "secondary": "rgb(82, 215, 239)",
      "onSecondary": "rgb(0, 54, 62)",
      "secondaryContainer": "rgb(0, 78, 90)",
      "onSecondaryContainer": "rgb(162, 238, 255)",
      "tertiary": "rgb(150, 203, 255)",
      "onTertiary": "rgb(0, 51, 83)",
      "tertiaryContainer": "rgb(0, 74, 118)",
      "onTertiaryContainer": "rgb(206, 229, 255)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(25, 28, 28)",
      "onBackground": "rgb(224, 227, 226)",
      "surface": "rgb(25, 28, 28)",
      "onSurface": "rgb(224, 227, 226)",
      "surfaceVariant": "rgb(63, 73, 72)",
      "onSurfaceVariant": "rgb(190, 201, 199)",
      "outline": "rgb(136, 147, 145)",
      "outlineVariant": "rgb(63, 73, 72)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(224, 227, 226)",
      "inverseOnSurface": "rgb(45, 49, 49)",
      "inversePrimary": "rgb(0, 106, 101)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(28, 38, 37)",
        "level2": "rgb(29, 43, 43)",
        "level3": "rgb(31, 49, 48)",
        "level4": "rgb(32, 51, 50)",
        "level5": "rgb(33, 55, 54)"
      },
      "surfaceDisabled": "rgba(224, 227, 226, 0.12)",
      "onSurfaceDisabled": "rgba(224, 227, 226, 0.38)",
      "backdrop": "rgba(41, 50, 49, 0.4)"
    }
  
};
const light = {
  ...LTheme,
  dark: false,
  roundness: 40,
  version: 3,
  fontFamily: 'Helvetica',
    "colors": {
      "primary": "rgb(0, 106, 101)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(112, 247, 238)",
      "onPrimaryContainer": "rgb(0, 32, 30)",
      "secondary": "rgb(0, 104, 119)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(162, 238, 255)",
      "onSecondaryContainer": "rgb(0, 31, 37)",
      "tertiary": "rgb(0, 99, 155)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(206, 229, 255)",
      "onTertiaryContainer": "rgb(0, 29, 51)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(250, 253, 251)",
      "onBackground": "rgb(25, 28, 28)",
      "surface": "rgb(250, 253, 251)",
      "onSurface": "rgb(25, 28, 28)",
      "surfaceVariant": "rgb(218, 229, 227)",
      "onSurfaceVariant": "rgb(63, 73, 72)",
      "outline": "rgb(111, 121, 120)",
      "outlineVariant": "rgb(190, 201, 199)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(45, 49, 49)",
      "inverseOnSurface": "rgb(239, 241, 240)",
      "inversePrimary": "rgb(79, 218, 210)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(238, 246, 244)",
        "level2": "rgb(230, 241, 239)",
        "level3": "rgb(223, 237, 235)",
        "level4": "rgb(220, 235, 233)",
        "level5": "rgb(215, 232, 230)"
      },
      "surfaceDisabled": "rgba(25, 28, 28, 0.12)",
      "onSurfaceDisabled": "rgba(25, 28, 28, 0.38)",
      "backdrop": "rgba(41, 50, 49, 0.4)"
    }
};
export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark'
  ? { ...DTheme, colors: dark.colors }
  : { ...LTheme, colors: light.colors };
  return (<PaperProvider theme = {theme}><Settings /></PaperProvider>);
}
//export default function App() {return <Transaction />;} // BROKEN
//export default function App() {return <Link />;} // BROKEN
//const Stack = createNativeStackNavigator();

