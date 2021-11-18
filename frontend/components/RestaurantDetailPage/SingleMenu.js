import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { CheckBox } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import { removeFromCart } from "../../redux/actions";

//props={singleFood:{title:"",description:"",price:"",image=""} ,restaurantName:""}

const SingleMenu = (props) => {
  console.log("SingleMenu rendered");

  const [isSelected, setSelection] = useState(false);

  const cartState = useSelector(function (store) {
    return store.myCartReducer;
  });

  const dispatch = useDispatch();

  function onPressHandler() {
    if (isSelected == false) {
      dispatch(addToCart(props.singleFood, props.restaurantName));
      setSelection(!isSelected);
    }
    if (isSelected == true) {
      dispatch(removeFromCart(props.singleFood, props.restaurantName));
      setSelection(!isSelected);
    }
  }
  console.log(isSelected);
  console.log(cartState);

  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: 5,
        }}
      >
        <CheckBox
          value={isSelected}
          onValueChange={onPressHandler}
          style={{ alignSelf: "center", marginHorizontal: 0 }}
        />
        <View
          style={{
            width: 215,
            borderWidth: 1,
            borderColor: "green",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
            }}
          >
            {props.singleFood.title}
          </Text>
          <Text>{props.singleFood.description}</Text>
          <Text>{props.singleFood.price}</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "green" }}>
          <Image
            source={{ uri: props.singleFood.image }}
            style={{
              width: 90,
              height: 100,
              borderRadius: 8,
            }}
          />
        </View>
      </View>
      <Divider
        width={1}
        orientation="vertical"
        style={{ marginHorizontal: 20 }}
      />
    </View>
  );
};

export default SingleMenu;
