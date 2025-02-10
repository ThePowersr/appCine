import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

interface PropsContentView extends ScrollViewProps {
  styleContainer?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export default PropsContentView;
