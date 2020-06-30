import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TrendingStack from "./TrendingStack";
import FavoritesScreen from "./screens/FavoritesScreen";

const MainTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name == "Trending") iconName = "ios-flame";
          else iconName = "ios-star";
          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#008080",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Trending" component={TrendingStack} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
