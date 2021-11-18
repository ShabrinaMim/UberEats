import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//props={name="string",image_url="string",rating=number,price="string",review_count=number,categories=[""],navigation=""}
const RestaurantItem = (props) => {
  console.log("RestaurantItem rendered");
  function onPressHandler() {
    props.navigation.navigate("RestaurantDetailPage", props); //here we have to a javascript object
  }
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={styles.restaurantItem_view}
    >
      <View>
        <Image
          source={{
            uri: props.image_url,
          }}
          style={{ width: "100%", height: 100 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
          <MaterialCommunityIcons name="heart-outline" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          borderWidth: 1,
          borderColor: "green",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "green",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "green",
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text>{props.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantItem_view: {
    borderWidth: 1,
    borderColor: "red",
    marginBottom: 10,
    marginTop: 5,
    padding: 10,
    backgroundColor: "white",
  },
});
