import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import FavoritesScreen from "./screens/FavoritesScreen";
import RecipeScreen from "./screens/RecipeScreen";

const Stack = createStackNavigator();

const FavoritesStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName="Favorites">
    <Stack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Recipe"
      component={RecipeScreen}
      options={{
        headerStyle: {
          backgroundColor: "#008080",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 15,
  },
  menuIcon: {
    marginLeft: 15,
  },
});

export default FavoritesStack;
