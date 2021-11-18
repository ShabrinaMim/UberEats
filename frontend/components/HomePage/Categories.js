import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-Up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];
const Categories = () => {
  console.log("Categories rendered");
  return (
    <ScrollView
      style={styles.categories_view}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map(function (i, index) {
        return (
          <View style={{ alignItems: "center", marginRight: 30 }} key={index}>
            <Image
              source={i.image}
              style={{
                borderWidth: 1,
                borderColor: "red",
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "900",
                borderWidth: 1,
                borderColor: "red",
              }}
            >
              {i.text}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
const styles = StyleSheet.create({
  categories_view: {
    borderWidth: 1,
    borderColor: "red",
    marginTop: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 20,
  },
});
