import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import CustomDrawerContent from "./components/CustomDrawerContentComponent";

import MainTabs from "./MainTabs";
import About from "./screens/AboutScreen";
const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          width: 240,
        }}
        drawerContentOptions={{ activeTintColor: "#008080" }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={MainTabs} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Settings" component={MainTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
