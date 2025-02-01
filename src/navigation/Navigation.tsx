import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome-screen/welcome-screen";
import SignUpScreen from "../screens/sign-up/sign-up-screen";

export type RootStackParams = {
  WelcomeScreen: undefined;
  SingUpScreen: undefined;
};


export const RootStack = createNativeStackNavigator({
  initialRouteName: 'WelcomeScreen',
  screenOptions: {
    headerShown: false
  },
  screens: {
    WelcomeScreen: WelcomeScreen,
    SingUpScreen: SignUpScreen
  },
});

export const Navigation = createStaticNavigation(RootStack);
