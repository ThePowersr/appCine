import { StyleProp, ViewStyle } from "react-native";

export interface PropsCustomButton {
  title: string;
  onPress: () => void;
  isSecondary?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
}
