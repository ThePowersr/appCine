import { useState } from "react";
import { RootStackParams } from "../../navigation/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";

const useSignUpScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParams>;
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const validateForm = (
    phoneNumber: string,
    name: string,
    lastName: string,
    email: string
  ) => {
    if (phoneNumber && name && lastName && email) {
      // navigate
      navigation.navigate("WelcomeScreen");
      console.log(
        `entraste con estos datos:\n ${phoneNumber},\n ${name},\n ${lastName},\n ${email}`
      );
      return;
    }
    Alert.alert("Todos los campos son obligatorios");
  };

  const onPressRegister = () => {
    validateForm(phoneNumber, name, lastName, email);
  };

  return {
    phoneNumber,
    setPhoneNumber,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    onPressRegister,
  };
};

export default useSignUpScreen;
