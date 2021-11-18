import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SearchBar } from "react-native-elements";
//import SearchIcon from "@mui/icons-material/Search";

const SearchingBar = (props) => {
  const [search, setSearch] = useState("");
  console.log("SearchBar rendered");

  function onChangeHandler(text) {
    setSearch(text);
  }
  function onSerchHandler() {
    props.setCityName(search);
  }

  return (
    <View>
      {/*<View style={styles.SearchBar_view}>
      <GooglePlacesAutocomplete
        placeholder="Search Places"
        query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }} //key will be needed here
        onPress={function (data, details = null) {
          console.log(data.description); // "Hollywood, CA,US"
          const cityName = data.description.split(",")[0]; //"Hollywood"
          props.setCityName(cityName);
        }}
        styles={{
          textInputContainer: {
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 50,
            marginRight: 10,
          },
          textInput: {
            backgroundColor: "#eee",
            borderRadious: 20,
            fontWeight: "700",
            marginTop: 7,
          },
        }}
        renderLeftButton={function () {
          return (
            <Ionicons
              name="location-sharp"
              size={20}
              style={{ marginLeft: 10 }}
            />
          );
        }}
        renderRightButton={function () {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                borderRadious: 30,
                borderTopStartRadius: 30,
                padding: 9,
                marginRight: 8,
                alignItems: "center",
              }}
            >
              <AntDesign
                name="clockcircle"
                size={11}
                style={{ marginRight: 6, marginTop: 4 }}
              />
              <Text>Search</Text>
            </View>
          );
        }}
      />
    </View>
      */}
      <View
        style={{
          borderWidth: 1,
          borderColor: "green",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 7,
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "green",

            width: "95%",
            backgroundColor: "#eee",
            fontWeight: "700",
          }}
          onChangeText={onChangeHandler}
          placeholder="Search Here...."
        />
        <TouchableOpacity onPress={onSerchHandler}>
          <Ionicons
            name="search-sharp"
            size={30}
            style={{
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "gray",
            }}
          />
        </TouchableOpacity>

        {/*<SearchBar
          lightTheme
          round
          placeholder="Search Here..."
          onChangeText={updateSearch}
          onSubmitEditing={updateSearch}
          value={search}
        />*/}
      </View>
    </View>
  );
};

export default SearchingBar;

const styles = StyleSheet.create({
  SearchBar_view: {
    borderWidth: 1,
    borderColor: "red",
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
  },
});
