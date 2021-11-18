import React from "react";
import { View } from "react-native";
import SingleIcon from "./SingleIcon";

const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <SingleIcon iconName="home" text="Home" />
      <SingleIcon iconName="search" text="Browse" />
      <SingleIcon iconName="shopping-bag" text="Grocery" />
      <SingleIcon iconName="receipt" text="Orders" />
      <SingleIcon iconName="user" text="Account" />
    </View>
  );
};

export default BottomTab;
