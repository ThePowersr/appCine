import { StyleProp, ViewProps, ViewStyle } from "react-native";

interface PropsContentView extends ViewProps {
  styleContainer?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

export default PropsContentView;