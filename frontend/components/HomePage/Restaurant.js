import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import RestaurantItem from "./RestaurantItem";
import axios from "axios";
const hostName = "192.168.0.103";

const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
];

//props={cityName="",transition="",navigation=""}
const Restaurant = (props) => {
  const [restaurantData, setRestaurantData] = useState([]);
  console.log("Restaurant rendered");

  //API calling will be done here
  async function getDataFromYelp() {
    try {
      const responseData = await axios.get(
        `http://${hostName}:4040/yelp?nameOfCity=${props.cityName}`
      );
      //console.log(responseData);
      //console.log(responseData.data); //responseData={ metaData,data:{ business:[{},{},{},{}] } }
      setRestaurantData(responseData.data.businesses);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(
    function () {
      getDataFromYelp();
    },
    [props.cityName]
  );

  return (
    <View>
      {restaurantData.map(function (i, index) {
        return (
          <RestaurantItem
            key={index}
            name={i.name}
            image_url={i.image_url}
            rating={i.rating}
            price={i.price}
            review_count={i.review_count}
            categories={i.categories}
            navigation={props.navigation}
          />
        );
      })}
    </View>
  );
};

export default Restaurant;
