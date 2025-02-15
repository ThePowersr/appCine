import React, { useEffect, useState } from "react";
import { FlatList, Image, Modal, Text, View, StyleSheet } from "react-native";
import { ContentView, CustomText } from "../../components";
import { Pelicula } from "../../data/products";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/custom-button/custom-button";
import { getItem, removeItem, setItem } from "../../utils/AsyncStorage";
import { ScrollView } from "react-native-gesture-handler";

const DetailScreen = ({
  route,
}: {
  route: { params: { pelicula: Pelicula } };
}) => {
  const { pelicula } = route.params;

  const [hideModal, setHideModal] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    const cart = await getItem("shoppingCart");
    if (cart && cart.productos) {
      setCartItems(cart.productos);
    } else {
      setCartItems([]);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [hideModal]);

  const handleAddToCart = async (peliculaId, sala, fila, asiento) => {
    const cart = await getItem("shoppingCart");
    const newItem = {
      idPelicula: peliculaId,
      sala: sala,
      fila: fila,
      asiento: asiento,
      price: 2.5,
    };
    const updatedCart = {
      productos: [...(cart?.productos || []), newItem],
    };
    await setItem("shoppingCart", updatedCart);
    setCartItems(updatedCart.productos || []);
  };

  return (
    <ContentView styleContainer={styles.container}>
      <Image source={{ uri: pelicula.image }} style={styles.image} />
      <View style={styles.content}>
        <CustomText styleContainer={styles.title}>{pelicula.titulo}</CustomText>
        <View style={styles.detailsRow}>
          <CustomText styleContainer={styles.boldText}>Genero: </CustomText>
          <CustomText>{pelicula.genero + " "}</CustomText>
          <CustomText styleContainer={styles.boldText}>Duracion: </CustomText>
          <CustomText>{pelicula.duracion}</CustomText>
        </View>
        <View style={styles.scheduleContainer}>
          {pelicula.horarios.map((horario, index) => (
            <View key={horario.sala} style={styles.scheduleItem}>
              <View style={styles.scheduleHeader}>
                <CustomText styleContainer={styles.scheduleTitle}>
                  {horario.sala}
                </CustomText>
                <CustomText>{`Hora: ${horario.hora}`}</CustomText>
              </View>
              <CustomText styleContainer={styles.seatsTitle}>
                Asientos:
              </CustomText>
              {horario.asientos_disponibles.map((asientos) => (
                <View style={styles.seatsRow} key={asientos.fila}>
                  <CustomText styleContainer={styles.seatText}>
                    {`fila: ${asientos.fila}`}
                  </CustomText>
                  <FlatList
                    data={asientos.asientos}
                    keyExtractor={(item) => item.toString()}
                    ItemSeparatorComponent={() => (
                      <View style={styles.separator} />
                    )}
                    horizontal
                    renderItem={(asiento) => (
                      <CustomButton
                        containerStyles={styles.seatButton}
                        title={asiento.item.toString()}
                        onPress={() =>
                          handleAddToCart(
                            pelicula.id,
                            horario.sala,
                            asientos.fila,
                            asiento.item
                          )
                        }
                      />
                    )}
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <Modal visible={hideModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View>
              <CustomText styleContainer={styles.modalTitle}>
                Productos en el carrito:
              </CustomText>
              <ScrollView style={{ margin: 20 }}>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <View key={index} style={styles.cartItem}>
                      <Text style={styles.cartItemText}>
                        Película: {item.idPelicula}
                      </Text>
                      <Text style={styles.cartItemText}>Sala: {item.sala}</Text>
                      <Text style={styles.cartItemText}>
                        Fila: {item.fila} - Asiento: {item.asiento}
                      </Text>
                      <Text style={styles.cartItemText}>
                        Precio: ${item.price}
                      </Text>
                    </View>
                  ))
                ) : (
                  <Text>Carrito vacio</Text>
                )}
              </ScrollView>
              <View style={styles.modalButtons}>
                <CustomButton
                  title="comprar"
                  isSecondary
                  onPress={() => {
                    setItem("shoppingCart", []);
                    setHideModal(false);
                  }}
                />
                <CustomButton
                  title="cerrar"
                  isSecondary
                  onPress={() => setHideModal(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <CustomButton
          title={"ver carrito"}
          onPress={() => setHideModal(true)}
        />
      </View>
    </ContentView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
  },
  image: {
    width: "100%",
    height: 600,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  detailsRow: {
    flexDirection: "row",
  },
  boldText: {
    fontWeight: "bold",
  },
  scheduleContainer: {
    width: "100%",
  },
  scheduleItem: {
    marginVertical: 20,
  },
  scheduleHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  scheduleTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  seatsTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  seatsRow: {
    marginTop: 5,
  },
  seatText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginHorizontal: 10,
  },
  seatButton: {
    height: "auto",
    paddingHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    height: "90%",
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-between",
  },
  modalTitle: {
    fontWeight: "700",
    color: "black",
    fontSize: 24,
  },
  modalButtons: {
    gap: 20,
  },
  cartItem: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cartItemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default DetailScreen;
