import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import TrendingScreen from "./screens/TrendingScreen";
import SearchScreen from "./screens/SearchScreen";
import RecipeScreen from "./screens/RecipeScreen";

const Stack = createStackNavigator();

const TrendingStack = ({ navigation }) => (
  <Stack.Navigator initialRouteName="Trending">
    <Stack.Screen
      name="Trending"
      component={TrendingScreen}
      options={{
        title: "What's Popular?",
        headerStyle: {
          backgroundColor: "#008080",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Ionicons
              name="ios-search"
              size={25}
              color="#fff"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="md-menu"
              size={25}
              color="#fff"
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
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

export default TrendingStack;
