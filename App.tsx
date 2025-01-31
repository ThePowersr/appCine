import { SafeAreaView, StatusBar } from 'react-native';
import SignUpScreen from './src/screens/sign-up/sign-up-screen';
import WelcomeScreen from './src/screens/welcome-screen/welcome-screen';

const App = () => {
  return (
    <>
      <StatusBar />
      <WelcomeScreen />
    </>
  );
}

export default App;
