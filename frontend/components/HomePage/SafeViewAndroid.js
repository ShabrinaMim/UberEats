import { Platform, StatusBar, StyleSheet } from "react-native";

const SafeViewAndroid = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderColor: "green",
    borderWidth: 4,
  },
});

export default SafeViewAndroid;
