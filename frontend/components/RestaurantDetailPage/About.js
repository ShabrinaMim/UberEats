import React from "react";
import { View, Text, Image } from "react-native";

//props={route:{params:{name="string",image_url="string",rating=number,price="string",review_count=number,categories=[""],navigation=""}}}

const About = (props) => {
  console.log("About rendered");
  const formattedCategories = props.route.params.categories
    .map((cat) => cat.title)
    .join(" • ");

  const description = `${formattedCategories} ${
    props.route.params.price ? " • " + props.route.params.price : ""
  } • 🎫 • ${props.route.params.rating} ⭐ (${
    props.route.params.review_count
  }+)`;
  return (
    <View style={{ borderWidth: 1, borderColor: "red" }}>
      <Image
        source={{ uri: props.route.params.image_url }}
        style={{
          width: "100%",
          height: 180,
          borderWidth: 1,
          borderColor: "green",
        }}
      />
      <Text
        style={{
          borderWidth: 1,
          borderColor: "green",
          fontSize: 25,
          fontWeight: "600",
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        {props.route.params.name}
      </Text>
      <Text
        style={{
          borderWidth: 1,
          borderColor: "green",
          marginTop: 10,
          marginHorizontal: 10,
          fontWeight: "400",
          fontSize: 15.5,
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default About;
