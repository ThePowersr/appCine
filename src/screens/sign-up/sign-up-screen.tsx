import React, { useState } from "react";
import ContentView from "../../components/content-view/content-view";
import CustomText from "../../components/custom-text/custom-text";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomButton from "../../components/custom-button/custom-button";
import styles from "./sing-up.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/Navigation";
import useSignUpScreen from "./use-sign-up-screen";

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const {
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
  } = useSignUpScreen({ navigation });

  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <ContentView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <CustomText styleContainer={styles.textTitle}>Registrarse</CustomText>

        <View style={{ justifyContent: "space-between" }}>
          <Text style={styles.subTitle}>Nombres:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Nombres completos"
          />
          <Text style={styles.subTitle}>Apellidos:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Apellidos completos"
          />
          <Text style={styles.subTitle}>Correo electronico:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="correo@domain.com"
          />
          <Text style={styles.subTitle}>Número de teléfono:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="+593-9XX-XXX-XXX"
            keyboardType="numeric"
          />
          <Text style={styles.subTitle}>Contrasena:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Ingresa una contrasena"
          />
        </View>

        <View style={{ gap: 20, marginBottom: 30 }}>
          <View style={{ gap: 20 }}>
            <CustomButton
              title="Registrarse"
              onPress={() => onPressRegister()}
            />
            <CustomButton
              title="Regresar"
              onPress={() => navigation.pop()}
              isSecondary
            />
          </View>
          <View>
            <CustomText styleContainer={{ textAlign: "center" }}>
              reservas de peliculas gratis
            </CustomText>
          </View>
        </View>
      </ContentView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
