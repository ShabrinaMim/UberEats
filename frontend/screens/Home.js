import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTab from "../components/HomePage/BottomTab";
import Categories from "../components/HomePage/Categories";
import Header from "../components/HomePage/Header";
import Restaurant from "../components/HomePage/Restaurant";
import SearchingBar from "../components/HomePage/SearchingBar";
import SafeViewAndroid from "../components/HomePage/SafeViewAndroid";

const Home = ({ navigation }) => {
  const [cityName, setCityName] = useState("SanDiego");
  const [transition, setTransition] = useState("Delivery");
  console.log("Home rendered");

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ flex: 1 }}>
        <View style={styles.homeView}>
          <Header setTransition={setTransition} />
          <SearchingBar setCityName={setCityName} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Categories />
            <Restaurant
              cityName={cityName}
              transition={transition}
              navigation={navigation}
            />
          </View>
        </ScrollView>
        <Divider width={1} />
        <BottomTab />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeView: {
    borderWidth: 1,
    borderColor: "green",
    padding: 15,
    backgroundColor: "white",
  },
});
