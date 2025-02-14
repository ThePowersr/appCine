import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomText from "../custom-text/custom-text";
import styles from "./custom-button.styles";
import { PropsCustomButton } from "./custom-button.interface";

const CustomButton = ({
  isSecondary = false,
  onPress,
  title,
  containerStyles,
}: PropsCustomButton) => {
  return (
    <TouchableOpacity
      style={[
        isSecondary ? styles.buttonSecondary : styles.button,
        containerStyles,
      ]}
      onPress={onPress}
    >
      <CustomText
        styleContainer={isSecondary ? styles.textSecondary : styles.text}
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
