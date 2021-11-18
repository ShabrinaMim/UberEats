import React from "react";
import { ScrollView, View } from "react-native";
import SingleMenu from "./SingleMenu";
//props={foods:[{title:"",description:"",price:"",image=""}], restaurantName:"string"}
const MenuItem = (props) => {
  console.log("MenuItem rendered");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ borderWidth: 1, borderColor: "red" }}
    >
      <View>
        {props.foods.map(function (i, index) {
          return (
            <SingleMenu
              singleFood={i}
              key={index}
              restaurantName={props.restaurantName}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MenuItem;
