import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pelicula } from "../../data/products";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/Navigation";

interface Props {
  pelicula: Pelicula;
  height?: number;
  width?: number;
}

const MoviePoster = ({ pelicula, height = 420, width = 300 }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailScreen", { pelicula })}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 6,
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: pelicula.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    borderRadius: 18,
    flex: 1,
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
});

export default MoviePoster;
