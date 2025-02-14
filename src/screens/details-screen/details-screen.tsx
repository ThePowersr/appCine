import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { ContentView, CustomText } from "../../components";
import { Pelicula } from "../../data/products";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/custom-button/custom-button";
import { getItem, removeItem, setItem } from "../../utils/AsyncStorage";

const DetailScreen = ({
  route,
}: {
  route: { params: { pelicula: Pelicula } };
}) => {
  const { pelicula } = route.params;

  return (
    <ContentView styleContainer={{ padding: 0, margin: 0 }}>
      <Image
        source={{ uri: pelicula.image }}
        style={{ width: "100%", height: 600 }}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <CustomText styleContainer={{ fontSize: 32, fontWeight: "bold" }}>
          {pelicula.titulo}
        </CustomText>
        <View style={{ flexDirection: "row" }}>
          <CustomText styleContainer={{ fontWeight: "bold" }}>
            {"Genero: "}
          </CustomText>
          <CustomText>{pelicula.genero + " "}</CustomText>
          <CustomText styleContainer={{ fontWeight: "bold" }}>
            {"Duracion: "}
          </CustomText>
          <CustomText>{pelicula.duracion}</CustomText>
        </View>
        <View style={{ width: "100%" }}>
          {pelicula.horarios.map((horario, index) => (
            <View key={"view" + horario.sala} style={{ marginVertical: 20 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <CustomText
                  key={"sala" + horario.sala}
                  styleContainer={{ fontSize: 32, fontWeight: "bold" }}
                >
                  {horario.sala}
                </CustomText>
                <CustomText key={"hora" + horario.sala}>
                  {`Hora: ${horario.hora}`}
                </CustomText>
              </View>
              <CustomText
                key={"asientos" + horario.sala}
                styleContainer={{ fontSize: 24, fontWeight: "bold" }}
              >
                {"Asientos:"}
              </CustomText>
              {horario.asientos_disponibles.map((asientos) => (
                <View style={{ marginTop: 5 }}>
                  <CustomText
                    key={"asientos" + horario.sala}
                    styleContainer={{ fontSize: 20, fontWeight: "bold" }}
                  >
                    {`fila: ${asientos.fila}`}
                  </CustomText>
                  <FlatList
                    data={asientos.asientos}
                    key={asientos.asientos.toString()}
                    ItemSeparatorComponent={() => (
                      <View style={{ marginHorizontal: 10 }} />
                    )}
                    horizontal
                    renderItem={(asiento) => {
                      const handlePress = async () => {
                        const cart = await getItem("shoppingCart");
                        setItem("shoppingCart", {
                          productos: [
                            ...(cart?.productos ?? []),
                            {
                              idPelicula: pelicula.id,
                              sala: horario.sala,
                              fila: asientos.fila,
                              asiento: asiento.item,
                            },
                          ],
                        });
                      };
                      return (
                        <CustomButton
                          containerStyles={{
                            height: "auto",
                            paddingHorizontal: 5,
                          }}
                          title={asiento.item.toString()}
                          onPress={() => handlePress()}
                        />
                      );
                    }}
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View>
        <CustomButton
          title={"ver carrito"}
          onPress={() => console.log("hola")}
        />
      </View>
    </ContentView>
  );
};

export default DetailScreen;
