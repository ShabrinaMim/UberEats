import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ButtonComponent from "./ButtonComponent";

const Header = (props) => {
  const [isTouched, setIsTouched] = useState(true);
  console.log("Header rendered");

  return (
    <View style={styles.Header_view}>
      <ButtonComponent
        text="Delivery"
        isTouched={isTouched}
        setIsTouched={setIsTouched}
        setTransition={props.setTransition}
      />
      <ButtonComponent
        text="Pickup"
        isTouched={!isTouched}
        setIsTouched={setIsTouched}
        setTransition={props.setTransition}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header_view: {
    borderWidth: 1,
    borderColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
