import React from "react";
import { ScrollView } from "react-native";
import PropsContentView from "./content-view.interface";
import styles from "./content-view.styles";

const ContentView = ({
  children,
  styleContainer,
  ...props
}: PropsContentView) => {
  return (
    <ScrollView style={[styles.container, styleContainer]} {...props}>
      {children}
    </ScrollView>
  );
};

export default ContentView;
