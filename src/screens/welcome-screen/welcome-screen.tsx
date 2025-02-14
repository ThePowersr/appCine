import React from "react";
import { ContentView, CustomText } from "../../components";
import CustomButton from "../../components/custom-button/custom-button";
import styles from "./welcome-screen.styles";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/Navigation";

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const arrayImage = [
    {
      title: "nombre",
      url: "https://play-lh.googleusercontent.com/Kf_1fCIuuy2ufsEBKwv08e9AvzwrSyCItG6Nsk4C2tGurknKjOS0H8k9KldDPC6hfzc",
    },
    {
      title: "nombre",
      url: "https://lumiere-a.akamaihd.net/v1/images/rochelle_teaser2_poster_las_9a24549d.jpeg",
    },
  ];

  const CorouselCustom = ({ item }: { item: string }) => {
    return <Image source={{ uri: item }} style={{ width: 300, height: 400 }} />;
  };

  return (
    <ContentView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
    >
      <CustomText styleContainer={styles.textTitle}>App Peliculas</CustomText>
      <View
        style={{ height: 440, justifyContent: "center", alignItems: "center" }}
      >
        <Carousel
          loop
          width={300}
          height={400}
          data={arrayImage}
          autoPlay
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
          scrollAnimationDuration={5000}
          renderItem={({ item }) => <CorouselCustom item={item.url} />}
        />
      </View>
      <View style={{ gap: 20, marginBottom: 30 }}>
        <View style={{ gap: 20 }}>
          <CustomButton
            title="iniciar sesion"
            onPress={() => navigation.navigate("SignInScreen")}
          />
          <CustomButton
            title="registrarse"
            onPress={() => navigation.navigate("SingUpScreen")}
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
  );
};

export default WelcomeScreen;
