import { FlatList, Image, Text, View } from "react-native";
import { ContentView, CustomText } from "../../components";
import MoviePoster from "../../components/movie-poster/movie-poster";
import { products } from "../../data/products";

const HomeScreen = () => {
  return (
    <ContentView>
      <CustomText styleContainer={{ fontWeight: "700", fontSize: 32 }}>
        AppCine
      </CustomText>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 40,
        }}
      >
        <Image
          source={{
            uri: "https://play-lh.googleusercontent.com/Kf_1fCIuuy2ufsEBKwv08e9AvzwrSyCItG6Nsk4C2tGurknKjOS0H8k9KldDPC6hfzc",
          }}
          style={{ width: 200, height: 290 }}
        />
      </View>
      <FlatList
        data={products.peliculas}
        renderItem={(pelicula) => <MoviePoster pelicula={pelicula.item} />}
        horizontal
        style={{ paddingBottom: 40 }}
      />
    </ContentView>
  );
};

export default HomeScreen;
