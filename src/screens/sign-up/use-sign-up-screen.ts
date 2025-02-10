import { useState } from "react";
import { RootStackParams } from "../../navigation/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import { users } from "../../data/users";

const useSignUpScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<RootStackParams>;
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validateForm = (
    phoneNumber: string,
    name: string,
    lastName: string,
    email: string
  ) => {
    if (phoneNumber && name && lastName && email) {
      console.log(
        `entraste con estos datos:\n ${phoneNumber},\n ${name},\n ${lastName},\n ${email},\n ${password}`
      );
      return true;
    }
    Alert.alert("Todos los campos son obligatorios");
    return false;
  };

  const registerUser = () => {
    users.push({ id: users.length + 2, name, email, password });
    navigation.navigate("WelcomeScreen");
  };

  const onPressRegister = () => {
    const nextStep = validateForm(phoneNumber, name, lastName, email);
    if (nextStep) {
      registerUser();
      return;
    }
    return;
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
    password,
    setPassword,
    onPressRegister,
  };
};

export default useSignUpScreen;
