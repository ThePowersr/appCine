import { SafeAreaView, StatusBar } from 'react-native';
import SignUpScreen from './src/screens/sign-up/sign-up-screen';
import WelcomeScreen from './src/screens/welcome-screen/welcome-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Navigation } from './src/navigation/Navigation';
const App = () => {
  return (
    <>
      <StatusBar />
      <GestureHandlerRootView>
        <SafeAreaView style={{flex:1}}><Navigation /></SafeAreaView>
        

      </GestureHandlerRootView>
    </>
  );
}

export default App;
