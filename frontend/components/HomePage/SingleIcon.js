import React from "react";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SingleIcon = (props) => {
  return (
    <TouchableOpacity>
      <FontAwesome5
        name={props.iconName}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default SingleIcon;
