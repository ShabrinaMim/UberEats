import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonComponent = (props) => {
  console.log("ButtonComponent rendered");
  console.log(props.isTouched);

  function onPressHandler() {
    if (props.isTouched == false) {
      props.setIsTouched(function (previousState) {
        props.setTransition(props.text);
        return !previousState;
      });
    }
  }

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={props.isTouched ? styles.nowTouched : styles.notTouched}
    >
      <Text
        style={
          props.isTouched ? styles.nowTouched_text : styles.notTouched_text
        }
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
const styles = StyleSheet.create({
  nowTouched: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 30,
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  nowTouched_text: {
    color: "white",
    fontSize: 15,
    fontWeight: "900",
  },
  notTouched: {
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 30,
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  notTouched_text: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
});
