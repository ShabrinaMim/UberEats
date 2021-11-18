import React from "react";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App rendered");
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Rest of your app code */}
        <Stack.Navigator
          initialRouteName="HomePage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomePage" component={Home} />
          <Stack.Screen
            name="RestaurantDetailPage"
            component={RestaurantDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
