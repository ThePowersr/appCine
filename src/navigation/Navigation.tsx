import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome-screen/welcome-screen";
import SignUpScreen from "../screens/sign-up/sign-up-screen";
import SignInScreen from "../screens/sign-in/sign-in-screen";
import HomeScreen from "../screens/home-screen/home-screen";
import { Pelicula } from "../data/products";
import DetailScreen from "../screens/details-screen/details-screen";
import ShoppingCart from "../screens/shopping-cart-screen/shopping-cart";

export type RootStackParams = {
  WelcomeScreen: undefined;
  SignInScreen: undefined;
  SingUpScreen: undefined;
  HomeScreen: undefined;
  DetailScreen: { pelicula: Pelicula };
  ShoppingCartScreen: undefined;
};

export const RootStack = createNativeStackNavigator({
  initialRouteName: "HomeScreen",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    WelcomeScreen: WelcomeScreen,
    SignInScreen: SignInScreen,
    SingUpScreen: SignUpScreen,
    HomeScreen: HomeScreen,
    DetailScreen: DetailScreen,
    ShoppingCartScreen: ShoppingCart,
  },
});

export const Navigation = createStaticNavigation(RootStack);
