import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen'
export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);
  return (
    <>

<SafeAreaProvider  
style={{ flex: 1, backgroundColor: "white", barStyle: "light-content"}}
>
<StatusBar
 style="light" backgroundColor="black" translucent = {true}/>
    <SafeAreaView style={{ flex: 1 }}>
    <WebView 
      source={{ uri: 'http://192.168.43.184:3000/' }} 
      style={{marginTop: 20}}
    />
    </SafeAreaView>
 </SafeAreaProvider>
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
