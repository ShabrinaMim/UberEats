import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const ViewCart = () => {
  console.log("ViewCart rendered");

  const [modalVisible, setModalVisible] = useState(false);

  const mycart = useSelector(function (store) {
    return store.myCartReducer;
  });

  let price = mycart.cartArray
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  {
    /*const totalUSD = price.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });*/
  }

  console.log(mycart.cartArray);

  function onPressHandler() {
    setModalVisible(true);
  }

  console.log(modalVisible);

  function checkoutModalContent() {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{mycart.restaurantName}</Text>
          {mycart.cartArray.map(function (i, index) {
            return <OrderItem key={index} item={i} />;
          })}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={{ opacity: 0.7, fontSize: 16 }}>{"$" + price}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
              }}
              onPress={() => {
                //addOrderToFireBase();
                setModalVisible(false);
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                  top: 17,
                }}
              >
                {"$" + price}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ borderWidth: 5, borderColor: "green" }}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {mycart.cartArray.length == 0 ? (
        <Text style={{ display: "none" }}>{"vvvv"}</Text>
      ) : (
        <View
          style={{
            borderWidth: 4,
            borderColor: "red",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "transparent",
          }}
        >
          <TouchableOpacity
            onPress={onPressHandler}
            style={{
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "black",
              flexDirection: "row",
              justifyContent: "center",
              padding: 15,
              borderRadius: 30,
              width: 300,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
              View Cart
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>{"$" + price}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderWidth: 4,
    borderColor: "green",
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
    borderColor: "red",
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "green",
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "green",
    padding: 20,
  },

  subtotalText: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "green",
  },
});
