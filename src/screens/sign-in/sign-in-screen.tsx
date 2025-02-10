import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import ContentView from "../../components/content-view/content-view";
import CustomText from "../../components/custom-text/custom-text";
import CustomButton from "../../components/custom-button/custom-button";
import styles from "./sing-in.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/Navigation";

const SignInScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <ContentView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
    >
      <CustomText styleContainer={styles.textTitle}>Sign In</CustomText>
      <View style={{ justifyContent: "space-between" }}>
        <Text style={styles.subTitle}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="moviles123@gmail.com"
          keyboardType="email-address"
        />
        <Text style={styles.subTitle}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="********"
          secureTextEntry={true}
        />
      </View>
      <View style={{ gap: 20, marginBottom: 30 }}>
        <View style={{ gap: 20 }}>
          <CustomButton
            title="Iniciar sesión"
            onPress={() => console.log("Iniciar sesión con", email, password)}
          />
          <CustomButton
            title="Regresar"
            onPress={() => navigation.navigate("WelcomeScreen")}
            isSecondary
          />
        </View>
        <View>
          <CustomText styleContainer={{ textAlign: "center" }}>
            Registrate
          </CustomText>
        </View>
      </View>
    </ContentView>
  );
};

export default SignInScreen;
